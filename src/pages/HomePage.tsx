import React from "react";
import Hero from "../components/Hero";
import PageShell from "../components/PageShell";

const HomePage = () => {
  return (
    <PageShell>
      <div className="min-h-screen">
        <Hero />
      </div>
    </PageShell>
  );
};

export default HomePage;
