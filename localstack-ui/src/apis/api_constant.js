console.log(process.env);
const baseUrl = process.env.S3_ENDPOINT
  ? process.env.S3_ENDPOINT
  : 'http://localhost:5556';

const ApiUrls = {
  fetchBuckets: baseUrl + '/s3/list-buckets/',
  createS3BucketApiUrl: baseUrl + '/s3/create-bucket/',
};

export default ApiUrls;
