import { useState } from 'react';
import './useLoading.css';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  return [ isLoading, setIsLoading ];
};

export const LoaderComponent = () => {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
};

export default useLoading;
