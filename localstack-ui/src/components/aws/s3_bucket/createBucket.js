import React from 'react';
import './s3_table.css';

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
            <a className="blue-link" href="#">
              Learn More
            </a>
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

const BucketForm = () => {
  return (
    <div className="container p-4 bg-same mb-4">
      <div className="section">
        <div className="section-header">General Information</div>
        <div className="form-group">
          <label for="bucketName">Bucket Name:</label>
          <input type="text" id="bucketName" placeholder="Enter Bucket Name" />
          <small className="small-text">
            Bucket name must be unique within the global namespace and follow
            the bucket naming rules.
            <a className="blue-link" href="#">
              See rules for bucket naming
            </a>
            <span className="link-icon"></span>
          </small>
        </div>
        <div className="form-group">
          <label for="awsRegion">AWS Region:</label>
          <select id="awsRegion">
            <option value="us-east-1">US East (N. Virginia)</option>
            <option value="us-west-2">US West (Oregon)</option>
            {/* Add more AWS regions as needed */}
          </select>
        </div>
        <button id="chooseBucket" className="btn btn-secondary">
          Choose Existing Bucket
        </button>
      </div>
    </div>
  );
};

function S3CreateBucket() {
  return (
    <>
      <Header />
      <BucketForm />
      <BucketVersioning></BucketVersioning>
      <div className="button-container">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary">Create Bucket</button>
      </div>
    </>
  );
}

export default S3CreateBucket;
