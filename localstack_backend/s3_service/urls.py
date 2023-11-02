from django.contrib import admin
from django.urls import path

from s3_service.views import S3BucketListAPIView, CreateBucketAPIView

urlpatterns = [
    path("list-buckets/",S3BucketListAPIView.as_view()),
    path("create-bucket/", CreateBucketAPIView.as_view(), name="create-bucket"),
]
