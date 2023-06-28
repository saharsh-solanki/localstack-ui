const baseUrl = process.env.S3_ENDPOINT
  ? process.env.S3_ENDPOINT
  : 'http://localhost:1111';

const ApiUrls = {
  FetchBuckets: baseUrl + '/s3/list-buckets/',
};

export default ApiUrls;
