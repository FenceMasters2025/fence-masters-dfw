import React from "react";
import fenceBg from "/gallery/07Rev-Stained-BOB_Las-Colinas-1600.webp";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen text-gray-800">
      {/* Fixed background image */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: `url(${fenceBg})` }}
        />
        {/* Soft white veil to keep text readable */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
