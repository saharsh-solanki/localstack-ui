import './s3_table.css';

/**
 *
 * @param {*} props
 */
export function CommonBoxWithHeader(props) {
  const { headerTitle } = props;
  return (
    <div className="d-flex flex-row common-create-bucket-container">
      <div className="common-create-bucket-header">
        {headerTitle}
      </div>
      <div>
        
      </div>
    </div>
  );
}

function S3CreateBucket() {
  // const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
        <CommonBoxWithHeader headerTitle="General Information">
          
        </CommonBoxWithHeader>
    </>
  );
}

export default S3CreateBucket;
