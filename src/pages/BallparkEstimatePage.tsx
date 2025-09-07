import React, { useEffect, useState } from 'react';
import LeadCaptureForm from '../components/LeadCaptureForm';
import FenceEstimateCalculator from '../components/FenceEstimateCalculator';
import PageShell from '../components/PageShell';

const BallparkEstimatePage = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    document.title = 'Ballpark Estimate - Fence Masters DFW';
  }, []);

  const handleLeadCaptureSuccess = () => {
    setShowCalculator(true);
  };

  return (
    <PageShell>
      {showCalculator ? (
        <FenceEstimateCalculator />
      ) : (
        <LeadCaptureForm onSuccess={handleLeadCaptureSuccess} />
      )}
    </PageShell>
  );
};

export default BallparkEstimatePage;
