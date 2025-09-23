import React from "react";
import Contact from "../components/Contact";
import PageShell from "../components/PageShell";

const ContactPage = () => {
  return (
    <PageShell>
      <div className="min-h-screen">
        <Contact />
      </div>
    </PageShell>
  );
};

export default ContactPage;
