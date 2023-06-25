import boto3
import os

class S3Service:
    def __init__(self):
        if os.getenv("DEVLOPMENT_TYPE","local") == "prod":
            endpoint_url = os.getenv("AWS_S3_ENDPOINT_URL")
            aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
            aws_secret_access_key= os.getenv("AWS_SECRET_ACCESS_KEY")
            self.client = boto3.client(
                's3',
                endpoint_url=endpoint_url,
                aws_access_key_id=aws_access_key_id, 
                aws_secret_access_key=aws_secret_access_key
            )
        else:
            self.client = boto3.client('s3',
                endpoint_url="http://localhost:4566",
            )

    def list_buckets(self):
        response = self.client.list_buckets()
        return response

    def create_bucket(self, bucket_name):
        response = self.client.create_bucket(Bucket=bucket_name)
        return response

    def delete_bucket(self, bucket_name):
        response = self.client.delete_bucket(Bucket=bucket_name)
        return response