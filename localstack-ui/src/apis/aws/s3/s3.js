import { runGetApi, runPostApi } from '../../api';
import ApiUrls from '../../api_constant';

const fetchBucketUrl = ApiUrls.fetchBuckets;
const createS3BucketApiUrl = ApiUrls.createS3BucketApiUrl;

export const fetchS3BucketApi = async (ReqData) => {
  try {
    const Result = runGetApi(fetchBucketUrl, ReqData);
    return Result;
  } catch (e) {
    console.error('FetchS3BucketApi:- ', e);
    return {};
  }
};

export const createS3BucketApi = async (ReqData) => {
    try {
      const Result = runPostApi(createS3BucketApiUrl, ReqData);
      return Result;
    } catch (e) {
      console.error('createS3BucketApi:- ', e);
      return {};
    }
  };