import React from "react";
import Gallery from "../components/Gallery";
import PageShell from "../components/PageShell";

const GalleryPage = () => {
  return (
    <PageShell>
      <div className="min-h-screen">
        <Gallery />
      </div>
    </PageShell>
  );
};

export default GalleryPage;
