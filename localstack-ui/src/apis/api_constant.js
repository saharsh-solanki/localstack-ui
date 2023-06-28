const baseUrl = 'http://localhost:5556'; //process.env.FETCH_BUCKET_URL; //Todo Get env

const ApiUrls = {
  FetchBuckets: baseUrl + '/s3/list-buckets/',
};

export default ApiUrls;
