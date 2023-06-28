import { runGetApi } from '../../api';
import ApiUrls from '../../api_constant';

const FetchBucketUrl = ApiUrls.FetchBuckets;

export const FetchS3BucketApi = async (ReqData) => {
  const Result = runGetApi(FetchBucketUrl, ReqData);
  return Result;
};
