import json
from s3_service.serializers import BucketDeleteSerializer, BucketListSerializer, CreateBucketSerializer
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
            bucket_name = data.get('bucket_name')
            enable_versioning = data.get('enable_versioning')
            tag_name = data.get('tag_name')
            aws_region = data.get('aws_region')
            service = S3Service()  
            try:
                # Create the bucket
                service.create_bucket(bucket_name, enable_versioning=None)

                return Response({"message": "Bucket created successfully"}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class S3BucketDeleteAPIView(APIView):
    def post(self, request):
        serializer = BucketDeleteSerializer(data=request.data)
        if serializer.is_valid():
            bucket_name = serializer.validated_data.get("bucket_name")
            service = S3Service()
            try:
                response = service.delete_bucket(bucket_name)
                return Response({"message": "Bucket deleted successfully","respose":response}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmptyBucketAPIView(APIView):
    def post(self, request):
        serializer = BucketDeleteSerializer(data=request.data)
        if serializer.is_valid():
            bucket_name = serializer.validated_data.get("bucket_name")
        s3_service = S3Service()
        try:
            response = s3_service.empty_bucket(bucket_name)
            return Response({'message': 'Bucket emptied successfully',"respose":response}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error emptying bucket: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)