import { runGetApi } from '../../api';
import ApiUrls from '../../api_constant';

const FetchBucketUrl = ApiUrls.FetchBuckets;

export const FetchS3BucketApi = async (ReqData) => {
  try{
    const Result = runGetApi(FetchBucketUrl, ReqData);
    return Result;
  }catch(e){
    console.error("FetchS3BucketApi:- ",e)
    return {};
  }
};
