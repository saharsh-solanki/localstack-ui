import Header from '../components/header/header';
import S3BucketListTable from '../components/aws/s3_bucket/s3_list_table';
import S3BucketAccountSnapShot from '../components/aws/s3_bucket/account_snapshot/account_snapshot';

function IndexPage() {
  return (
    <div>
      <Header></Header>
      <div className="row root-bg">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <S3BucketAccountSnapShot></S3BucketAccountSnapShot>
          <S3BucketListTable></S3BucketListTable>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
