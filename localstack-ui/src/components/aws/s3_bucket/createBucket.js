import { useEffect, useState } from 'react';
import { FetchS3BucketApi } from '../../../apis/aws/s3/fetch_buckets';
import './s3_table.css';

/**
 *
 * @param {*} props
 */
export function CommonBoxWithHeader({ headerTitle, bodyComponent }) {
  return (
    <div className="d-flex flex-row">
      <div className="common-create-bucket-header">headerTitle</div>
      <div>
        <bodyComponent ></bodyComponent>
      </div>
    </div>
  );
}

function S3CreateBucket() {
  const [isLoading, setIsLoading] = useState(false);
  //   const [s3BucketData, setS3BucketData] = useState([]);

  //   useEffect(() => {
  //     fetchS3Bucekts();
  //   }, []);

  //   const fetchS3Bucekts = async () => {
  //     setIsLoading(true);
  //     const response = await FetchS3BucketApi();
  //     if (response) {
  //       setS3BucketData(response['data']['Buckets']);
  //     }
  //     setIsLoading(false);
  //   }
  const GenerateInformation = () => {

  }

  return (
    <div className="">
        <CommonBoxWithHeader headerTitle="General Information" bodyComponent></CommonBoxWithHeader>
    </div>
  );
}

export default S3CreateBucket;
