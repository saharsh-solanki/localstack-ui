import React, { useState } from 'react';
import './s3_table.css';
import { createS3BucketApi } from '../../../apis/aws/s3/s3';
import useLoading from '../../../hooks/useLoading';
import showToast from '../../../utils/toast';

const Header = () => {
  return (
    <>
      <h2 className="mx-3 my-3"> Create bucket</h2>
    </>
  );
};

const BucketVersioning = () => {
  return (
    <div className="container p-4 mb-4">
      <div className="section">
        <div className="section-header">Bucket Versioning</div>
        <div className="form-group">
          <p>
            Versioning is a means of keeping multiple variants of an object in
            the same bucket. You can use versioning to preserve, retrieve, and
            restore every version of every object stored in your Amazon S3
            bucket. With versioning, you can easily recover from both unintended
            user actions and application failures.
            <button className="blue-link" href="#">
              Learn More
            </button>
            <span className="link-icon"></span>
          </p>
        </div>
        <br></br>
        <div className="form-group">
          <label>Bucket Versioning:</label>
          <div>
            <label>
              <input type="radio" name="bucketVersioning" value="enabled" />{' '}
              Enable
            </label>
            <br></br>
            <label>
              <input type="radio" name="bucketVersioning" value="disabled" />{' '}
              Disable
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const BucketForm = (props) => {
  const { bucketName, setBucketName } = props;

  return (
    <div className="container p-4 bg-same mb-4">
      <div className="section">
        <div className="section-header">General Information</div>
        <div className="form-group">
          <label htmlFor="bucketName">Bucket Name:</label>
          <input
            type="text"
            id="bucketName"
            placeholder="Enter Bucket Name"
            value={bucketName}
            onChange={(e)=>{
              setBucketName(e.target.value)
            }}
          />
          <small className="small-text">
            Bucket name must be unique within the global namespace and follow
            the bucket naming rules.
            <button className="blue-link" href="#">
              See rules for bucket naming
            </button>
            <span className="link-icon"></span>
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="awsRegion">AWS Region:</label>
          <select id="awsRegion">
            <option value="us-east-1">US East (N. Virginia)</option>
            <option value="us-west-2">US West (Oregon)</option>
            {/* Add more AWS regions as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chooseBucket">Choose an Existing Bucket</label>
          <br></br>
          <button id="chooseBucket" className="btn btn-secondary">
            Choose Existing Bucket
          </button>
        </div>
      </div>
    </div>
  );
};

function S3CreateBucket() {
  const [bucketName, setBucketName] = useState('');
  const [,setIsLoading] = useLoading();

  const createBucketBtnClickHandler = async () => {
    try{
      setIsLoading(true);
      const payload = {
        bucket_name:bucketName
      }
      const response = await createS3BucketApi(payload);
      console.log("response",response);
      setIsLoading(false);
      showToast({
        response:response,
      })
    }
    catch(e){
      showToast({
        response:{statusCode:"500"},
      })
      console.log("Error S3CreateBucket :- ",e )
      setInterval(false);
    }
  };

  return (
    <>
      <div className="p-5">
        <Header />
        <BucketForm bucketName={bucketName} setBucketName={setBucketName} />
        <BucketVersioning></BucketVersioning>
        <div className="button-container">
          <button className="btn btn-secondary">Cancel</button>
          <button
            className="btn btn-warning"
            onClick={createBucketBtnClickHandler}
          >
            Create Bucket
          </button>
        </div>
      </div>
    </>
  );
}

export default S3CreateBucket;
