import { useEffect, useState } from 'react';
import { FetchS3BucketApi } from '../../../apis/aws/s3/fetch_buckets';
import './s3_table.css';

function S3BucketListTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [s3BucketData, setS3BucketData] = useState([]);

  useEffect(() => {
    fetchS3Bucekts();
  }, []);

  const testData = [
    {
      Name: 'Test Bucket 1',
      AwsRegion: 'US-EAST-1',
      Access: 'Public',
      CreationDate: '02-02-2022',
    },
    {
      Name: 'Test Bucket 2',
      AwsRegion: 'US-EAST-2',
      Access: 'Private',
      CreationDate: '02-02-2022',
    },
  ];

  const fetchS3Bucekts = async () => {
    setIsLoading(true);
    const fetchS3BucketResult = await FetchS3BucketApi();
    setS3BucketData(fetchS3BucketResult);
    setIsLoading(false);
  };

  return (
    <div className="main-table margin-right-10 my-4">
      <div className="s3-header-detail bg-light">
        <div className="bucket-header">
          <b>Buckets</b> ({testData.length})
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
            <th scope="row">
              <tr>Loading</tr>
            </th>
          ) : (
            isLoading &&
            s3BucketData &&
            s3BucketData?.map((bucket) => {
              return (
                <>
                  <tr>
                    <th scope="row">
                      <input type="radio"></input>
                    </th>
                    <td>{bucket.Name}</td>
                    {/* <td>{bucket.AwsRegion}</td>
                  <td>{bucket.Access}</td>
                  <td>{bucket.CreationDate}</td> */}
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default S3BucketListTable;
