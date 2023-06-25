import json
from s3_service.serializers import BucketListSerializer
from rest_framework.views import APIView
from django.http import JsonResponse
from .s3_base import S3Service


class S3BucketListAPIView(APIView):
    def get(self, request):
        service = S3Service()
        buckets = service.list_buckets()
        serialized_data = BucketListSerializer(buckets).data
        return JsonResponse(serialized_data, safe=False)