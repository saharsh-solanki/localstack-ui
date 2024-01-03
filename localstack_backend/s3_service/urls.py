from django.contrib import admin
from django.urls import path

from s3_service.views import S3BucketListAPIView, CreateBucketAPIView, S3BucketDeleteAPIView, EmptyBucketAPIView

urlpatterns = [
    path("list-buckets/",  S3BucketListAPIView.as_view()),
    path("create-bucket/", CreateBucketAPIView.as_view(), name="create-bucket"),
    path("delete-bucket/", S3BucketDeleteAPIView.as_view(), name="delet-bucket"),
    path("empty-bucket/", EmptyBucketAPIView.as_view(), name="empty-bucket"),
]
