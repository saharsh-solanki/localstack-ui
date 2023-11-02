import json
from s3_service.serializers import BucketListSerializer, CreateBucketSerializer
from rest_framework.views import APIView
from django.http import JsonResponse
from .s3_base import S3Service
from rest_framework.response import Response
from rest_framework import status


class S3BucketListAPIView(APIView):
    def get(self, request):
        service = S3Service()
        buckets = service.list_buckets()
        serialized_data = BucketListSerializer(buckets).data
        return JsonResponse(serialized_data, safe=False)
    


class CreateBucketAPIView(APIView):
    def post(self, request):
        serializer = CreateBucketSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            bucket_name = data['bucket_name']
            enable_versioning = data['enable_versioning']
            tag_name = data.get('tag_name')
            aws_region = data.get('aws_region')  # Get the aws_region from the request data

            service = S3Service(aws_region=aws_region, enable_versioning=enable_versioning)  # Pass the options to S3Service constructor
            
            try:
                # Create the bucket
                service.create_bucket(bucket_name)

                return Response({"message": "Bucket created successfully"}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
