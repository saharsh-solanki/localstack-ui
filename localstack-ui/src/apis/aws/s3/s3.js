import { runGetApi, runPostApi } from '../../api';
import ApiUrls from '../../api_constant';

const fetchBucketUrl = ApiUrls.fetchBuckets;
const createS3BucketApiUrl = ApiUrls.createS3BucketApiUrl;
const deleteS3BucketApiUrl = ApiUrls.deleteS3BucketApiUrl;
const emptyS3BucketApiUrl = ApiUrls.emptyS3BucketApiUrl;

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

export const deleteS3BucketApi = async (ReqData) => {
  try {
    const Result = runPostApi(deleteS3BucketApiUrl, ReqData);
    return Result;
  } catch (e) {
    console.error('deleteS3BucketApi:- ', e);
    return {};
  }
};

export const emptyS3BucketApi = async (ReqData) => {
  try {
    const Result = runPostApi(emptyS3BucketApiUrl, ReqData);
    return Result;
  } catch (e) {
    console.error('emptyS3BucketApi:- ', e);
    return {};
  }
};