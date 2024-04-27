import React from 'react';
import { Skeleton } from '@mui/material';

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-grid">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="shimmer-item">
            <Skeleton variant="rectangular" width={300} height={200} />
            <div className="shimmer-text">
              <Skeleton width="80%" />
              <Skeleton width="60%" />
              <Skeleton width="70%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
