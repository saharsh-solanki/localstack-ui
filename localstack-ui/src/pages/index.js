import Header from '../components/header/header';
import S3BucketListTable from '../components/aws/s3_bucket/s3_list_table';
import S3BucketAccountSnapShot from '../components/aws/s3_bucket/account_snapshot/account_snapshot';

function IndexPage() {
  return (
    <div>
      <Header></Header>
      <div className="">
        <div className="main-container-list-s3-table align-items-center ">
          <S3BucketAccountSnapShot></S3BucketAccountSnapShot>
          <S3BucketListTable></S3BucketListTable>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
