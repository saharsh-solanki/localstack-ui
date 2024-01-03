import { useEffect, useState } from 'react';
import { deleteS3BucketApi, emptyS3BucketApi, fetchS3BucketApi } from '../../../apis/aws/s3/s3';
import './s3_table.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RootModal } from '../../modal/mainModal';

function S3BucketListTable() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [s3BucketData, setS3BucketData] = useState([]);
  const [selectedBucketName, setSelectedBucketName] = useState('');

  useEffect(() => {
    fetchS3Bucekts();
  }, []);

  const fetchS3Bucekts = async () => {
    setIsLoading(true);
    const response = await fetchS3BucketApi();
    if (response) {
      setS3BucketData(response['data']['Buckets']);
    }
    setIsLoading(false);
  };

  const handleCurrentSelectedbucketChange = (event) => {
    setSelectedBucketName(event.target.value);
  };

  const handleDeleteButtonClick = async () => {
    /* Bucket name is mandator else it will throw error  
    * Call delete api by passing bucket_name
    * Refresh the bucket list
    */
    if (!selectedBucketName) {
      toast.info('Please select a bucket');
      return false;
    }
    setIsLoading(true);
    const payload = { bucket_name: selectedBucketName };
    const response = await deleteS3BucketApi(payload);
    if (response?.status) {
      setSelectedBucketName('');
      toast.success('Bucket Deleted ');
      await fetchS3Bucekts();
    } else {
      toast.error('Some error while deleting bucket ');
      console.log('bucket deleting error response', response);
    }
    setIsLoading(false);
  };

  const handleEmptyBucketClick = async () => {
    if (!selectedBucketName) {
      toast.info('Please select a bucket');
      return false;
    }
    const confirmed = window.confirm('Are you sure you want to empty the bucket?');
    if (!confirmed) {
      return;
    }
    setIsLoading(true);
  
    try {
      const payload = { bucket_name: selectedBucketName };
      const response = await emptyS3BucketApi(payload);
  
      if (response?.status) {
        toast.success('Bucket Emptied');
        await fetchS3Bucekts();
      } else {
        toast.error('Error emptying the bucket');
        console.log('Bucket emptying error response', response);
      }
    } catch (error) {
      toast.error('An error occurred while emptying the bucket');
      console.error('Bucket emptying error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
    <div className="main-table margin-right-10 my-4">
      <div className="s3-header-detail bg-light">
        <div className="bucket-header">
          <b>Buckets</b> ({s3BucketData?.length})
        </div>
        <div>
          <button
            onClick={() => {
              handleEmptyBucketClick()
            }}
            className="btn btn-sm btn-delete-bucket"
            disabled={!selectedBucketName}
          >
            Empty
          </button>
          <button
            onClick={() => {
              handleDeleteButtonClick();
            }}
            className="btn btn-sm btn-delete-bucket"
            disabled={!selectedBucketName}
          >
            Delete
          </button>
          <button
            onClick={() => {
              navigate('/create/s3/buckets');
            }}
            className="btn btn-sm  text-sm btn-warning"
          >
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
            <tr>
              <td className='py-5 px-5' colSpan={5}>Loading buckets</td>
            </tr>
          ) : (
            s3BucketData.length > 0 &&
            s3BucketData?.map((bucket, index) => {
              return (
                <tr key={'tr-' + index}>
                  <th scope="row">
                    <input
                      onChange={handleCurrentSelectedbucketChange}
                      type="radio"
                      key={'input-' + index}
                      value={bucket?.Name}
                    ></input>
                  </th>
                  <td>{bucket.Name}</td>
                  <td>{bucket?.AwsRegion}</td>
                  <td>
                    {bucket?.Access?.map((accessData) => {
                      return accessData?.Permission;
                    }).join(' , ')}
                  </td>
                  <td>{bucket.CreationDate}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>

    {/* <RootModal isOpen={true} onClose={()=>{}}>
      Dummy Modal */}
    {/* </RootModal> */}
    </>
  );
}

export default S3BucketListTable;
