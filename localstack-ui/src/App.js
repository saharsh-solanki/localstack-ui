import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import S3CreateBucket from './components/aws/s3_bucket/createBucket';
import './App.css';
import useLoading, { LoaderComponent } from './hooks/useLoading';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isLoading] = useLoading();

  return (
    <>
      {isLoading ? (
        <LoaderComponent></LoaderComponent>
      ) : (<>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/create/s3/buckets" element={<S3CreateBucket />} />
        </Routes>
        <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
