from rest_framework import serializers


class BucketDetailSerializer(serializers.Serializer):
    Name = serializers.CharField()
    CreationDate = serializers.DateTimeField()


class BucketListSerializer(serializers.Serializer):
    Buckets = BucketDetailSerializer(many=True)

