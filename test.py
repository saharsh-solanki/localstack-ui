import boto3
import json
# Set the endpoint URL for LocalStack
endpoint_url = 'http://localhost:4566'

# Create an S3 client with the local endpoint
s3_client = boto3.client('s3', endpoint_url=endpoint_url)

# Define the bucket name
bucket_name = 'my-bucketsssss'

# Create the bucket
s3_client.create_bucket(Bucket=bucket_name)

# Check if the bucket was created successfully
response = s3_client.list_buckets()

# if bucket_name in [bucket['Name'] for bucket in response['Buckets']]:
#     print(f"Bucket '{bucket_name}' created successfully.")
# else:
#     print(f"Failed to create bucket '{bucket_name}'.")

print(response)