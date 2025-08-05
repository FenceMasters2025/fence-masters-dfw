import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ballpark-estimate" element={<EstimatePage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Tidio Chat Widget Placeholder */}
        <div id="tidio-chat" className="fixed bottom-4 right-4 z-50">
          {/* Tidio script would be inserted here */}
        </div>
      </div>
    </Router>
  );
}

export default App;
