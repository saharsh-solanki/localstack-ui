console.log(process.env);
const baseUrl = process.env.S3_ENDPOINT
  ? process.env.S3_ENDPOINT
  : 'http://localhost:5556';

const ApiUrls = {
  FetchBuckets: baseUrl + '/s3/list-buckets/',
};

export default ApiUrls;
