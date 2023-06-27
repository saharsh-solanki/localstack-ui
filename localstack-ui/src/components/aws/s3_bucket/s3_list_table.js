import './s3_table.css';

function S3BucketListTable() {
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
      <table class="table s3-list-table">
        <thead class="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">AWS Region</th>
            <th scope="col">Access</th>
            <th scope="col">Creation date</th>
          </tr>
        </thead>
        <tbody>
          {testData?.map((bucket) => {
            return (
              <>
                <tr>
                  <th scope="row">
                    <input type="radio"></input>
                  </th>
                  <td>{bucket.Name}</td>
                  <td>{bucket.AwsRegion}</td>
                  <td>{bucket.Access}</td>
                  <td>{bucket.CreationDate}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default S3BucketListTable;
