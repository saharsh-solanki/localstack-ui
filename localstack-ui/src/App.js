import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import S3CreateBucket from './components/aws/s3_bucket/createBucket';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/create/s3/buckets" element={<S3CreateBucket />} />
    </Routes>
  );
}

export default App;
