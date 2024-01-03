import React, { useState } from 'react';
import './s3_table.css';
import { createS3BucketApi } from '../../../apis/aws/s3/s3';
import useLoading from '../../../hooks/useLoading';
import showToast from '../../../utils/toast';
import Header from '../../header/header';

const HeaderComp = () => {
  return (
    <>
    <div className='d-flex align-items-center'>
      <a className='nav-link' href='../../'>Go Back</a><h2 className="mx-3 my-3"> Create bucket</h2>
      </div>
    </>
  );
};

const BucketVersioning = (props) => {
  const { enableVersioning, setEnableVersioning } = props;

  const handleChange = (e) => {
    if (e.target.value === "enabled"){
      setEnableVersioning(true);
    }
    else{
      setEnableVersioning(false);
    }
  }

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
              <input type="radio" onChange={handleChange} name="bucketVersioning" value="enabled" checked={enableVersioning} />{' '}
              Enable
            </label>
            <br></br>
            <label>
              <input type="radio"  onChange={handleChange} name="bucketVersioning" value="disabled" checked={!enableVersioning} />{' '}
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
  const [enableVersioning, setEnableVersioning] = useState(false);
  const [,setIsLoading] = useLoading();

  const createBucketBtnClickHandler = async () => {
    try{
      setIsLoading(true);
      const payload = {
        bucket_name:bucketName,
        enable_versioning:enableVersioning
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
    <Header ></Header>
      <div className="px-5">
        <HeaderComp />
        <BucketForm bucketName={bucketName} setBucketName={setBucketName} />
        <BucketVersioning setEnableVersioning={setEnableVersioning} enableVersioning={enableVersioning}></BucketVersioning>
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
