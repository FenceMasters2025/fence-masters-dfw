import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import EstimatePage from "./pages/BallparkEstimatePage";
import PageShell from "./components/PageShell";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* ✅ Navigation bar always visible */}
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<PageShell><HomePage /></PageShell>} />
            <Route path="/services" element={<PageShell><ServicesPage /></PageShell>} />
            <Route path="/about" element={<PageShell><AboutPage /></PageShell>} />
            <Route path="/gallery" element={<PageShell><GalleryPage /></PageShell>} />
            <Route path="/contact" element={<PageShell><ContactPage /></PageShell>} />
            <Route path="/ballpark-estimate" element={<PageShell><EstimatePage /></PageShell>} />
            <Route path="/privacy-policy" element={<PageShell><PrivacyPolicy /></PageShell>} />
          </Routes>
        </main>

        {/* ✅ Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
