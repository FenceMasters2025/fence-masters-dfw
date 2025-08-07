import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LeadCaptureForm from '../components/LeadCaptureForm';
import FenceEstimateCalculator from '../components/FenceEstimateCalculator'; // Updated import

const BallparkEstimatePage = () => { // Updated component name to match file
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    document.title = 'Ballpark Estimate - Fence Masters DFW';
  }, []);

  const handleLeadCaptureSuccess = () => {
    setShowCalculator(true);
  };

  return (
    <div>
      {showCalculator ? (
        <FenceEstimateCalculator /> // Updated component usage
      ) : (
        <LeadCaptureForm onSuccess={handleLeadCaptureSuccess} />
      )}
    </div>
  );
};

export default BallparkEstimatePage; // Updated export
