import { useEffect, useState } from 'react';
import { FetchS3BucketApi } from '../../../apis/aws/s3/fetch_buckets';
import './s3_table.css';

function S3BucketListTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [s3BucketData, setS3BucketData] = useState([]);

  useEffect(() => {
    fetchS3Bucekts();
  }, []);

  const fetchS3Bucekts = async () => {
    setIsLoading(true);
    const response = await FetchS3BucketApi();
    if (response) {
      setS3BucketData(response['data']['Buckets']);
    }
    setIsLoading(false);
  };

  return (
    <div className="main-table margin-right-10 my-4">
      <div className="s3-header-detail bg-light">
        <div className="bucket-header">
          <b>Buckets</b> ({s3BucketData.length})
        </div>
        <div>
          <button className="btn btn-sm  text-sm btn-warning">
            Create bucket
          </button>
        </div>
      </div>
      <table className="table s3-list-table">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">AWS Region</th>
            <th scope="col">Access</th>
            <th scope="col">Creation date</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr scope="row">
              <td>Loading</td>
            </tr>
          ) : (
            s3BucketData.length > 0 &&
            s3BucketData?.map((bucket, index) => {
              return (
                <tr key={'tr-' + index}>
                  <th scope="row">
                    <input type="radio" key={'input-' + index}></input>
                  </th>
                  <td>{bucket.Name}</td>
                  <td>{bucket?.AwsRegion}</td>
                  <td>{bucket?.Access}</td>
                  <td>{bucket.CreationDate}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default S3BucketListTable;
