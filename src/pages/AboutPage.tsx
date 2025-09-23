import React from "react";
import About from "../components/About";
import PageShell from "../components/PageShell";

const AboutPage = () => {
  return (
    <PageShell>
      <div className="min-h-screen">
        <About />
      </div>
    </PageShell>
  );
};

export default AboutPage;
