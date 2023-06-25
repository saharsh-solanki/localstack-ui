from django.contrib import admin
from django.urls import path

from s3_service.views import S3BucketListAPIView

urlpatterns = [
    path("list-buckets/",S3BucketListAPIView.as_view())
]
