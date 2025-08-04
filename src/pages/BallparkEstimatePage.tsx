import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LeadCaptureForm from '../components/LeadCaptureForm';
import EstimateCalculator from '../components/EstimateCalculator';

const EstimatePage = () => {
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
        <EstimateCalculator />
      ) : (
        <LeadCaptureForm onSuccess={handleLeadCaptureSuccess} />
      )}
    </div>
  );
};

export default EstimatePage;