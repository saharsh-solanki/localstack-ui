from rest_framework import serializers


class BucketDetailSerializer(serializers.Serializer):
    Name = serializers.CharField()
    CreationDate = serializers.DateTimeField()
    AwsRegion = serializers.CharField()
    Access = serializers.ListField(child=serializers.JSONField())


class BucketListSerializer(serializers.Serializer):
    Buckets = BucketDetailSerializer(many=True)


class CreateBucketSerializer(serializers.Serializer):
    bucket_name = serializers.CharField(required=True)
    enable_versioning = serializers.BooleanField(default=False)
    tag_name = serializers.CharField(required=False, allow_blank=True)
    # Add more fields for other configurations as needed


class BucketDeleteSerializer(serializers.Serializer):
    bucket_name = serializers.CharField()
