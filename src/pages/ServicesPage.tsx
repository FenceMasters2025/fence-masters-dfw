import React from "react";
import Services from "../components/Services";
import PageShell from "../components/PageShell";

const ServicesPage = () => {
  return (
    <PageShell>
      <div className="min-h-screen">
        <Services />
      </div>
    </PageShell>
  );
};

export default ServicesPage;
