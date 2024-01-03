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
        print("Log list_buckets response:- ",response)
        buckets = response['Buckets']

        for bucket in buckets:
            region = self.get_bucket_region(bucket['Name'])
            access = self.get_bucket_access(bucket['Name'])
            bucket['AwsRegion'] = region
            bucket['Access'] = access.get("Grants")

        print("Log list_buckets :- ", response)
        return response

    def create_bucket(self, bucket_name, enable_versioning=False):
        response = self.client.create_bucket(Bucket=bucket_name)
        if enable_versioning:
            self.enable_versioning(bucket_name)
        return response

    def delete_bucket(self, bucket_name):
        try:
            response = self.client.delete_bucket(Bucket=bucket_name)
        except Exception as e:
            print("Log delete_bucket error :- ",e)
        return response
    
    def enable_versioning(self,bucket_bame):
        try:
            self.client.put_bucket_versioning(
                Bucket=bucket_bame,
                VersioningConfiguration={'Status': 'Enabled'}
            )
        except Exception as e:
            print("Log enable_versioning :- ",e)

    def disable_versioning(self, bucket_bame):
        # Disable versioning for the bucket
        try:
            self.client.put_bucket_versioning(
                Bucket=bucket_bame,
                VersioningConfiguration={'Status': 'Suspended'}
            )
        except Exception as e:
            print("Log disable_versioning :- ",e)
    
    def get_bucket_region(self, bucket_name):
        try:
            response = self.client.get_bucket_location(Bucket=bucket_name)
            print("log  get_bucket_region:- response",response)
            if response.get('LocationConstraint', 'us-east-1'):
                return response.get('LocationConstraint', 'us-east-1')
            else:
                return 'us-east-1'
        except Exception as e:
            print("log error get_bucket_region:- ",e)
    
    def get_bucket_access(self, bucket_name):
        try:
            result = self.client.get_bucket_acl(Bucket=bucket_name)
            return result
        except Exception as e:
            print("log get_bucket_access :- result")
    
    def empty_bucket(self, bucket_name):
        try:
            objects = self.client.list_objects_v2(Bucket=bucket_name)
            for obj in objects.get('Contents', []):
                self.client.delete_object(Bucket=bucket_name, Key=obj['Key'])

            print(f'Bucket {bucket_name} emptied successfully')
            return True
        except Exception as e:
            print(f'Error emptying bucket {bucket_name}: {str(e)}')
            return False
