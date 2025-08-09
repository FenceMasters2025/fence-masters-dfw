import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        {/* Top Bar */}
        <div className="bg-blue-900 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <a href="tel:214-493-3438" className="hover:text-blue-200 transition-colors">
                  (214) 493-3438
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Serving Dallas-Fort Worth</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free Estimates • Licensed & Insured</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                Fence Masters DFW
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-blue-900 font-semibold' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-900 font-semibold' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-900 font-semibold' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                About
              </Link>
              <Link 
                to="/gallery" 
                className={`transition-colors ${
                  isActive('/gallery') 
                    ? 'text-blue-900 font-semibold' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-900 font-semibold' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Contact
              </Link>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className={`transition-colors ${
                    isActive('/') 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className={`transition-colors ${
                    isActive('/services') 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className={`transition-colors ${
                    isActive('/about') 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/gallery" 
                  className={`transition-colors ${
                    isActive('/gallery') 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors ${
                    isActive('/contact') 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

		<Link 
 		 to="/ballpark-estimate" 
 		 className={`transition-colors ${
 		   isActive('/ballpark-estimate') 
  		    ? 'text-blue-900 font-semibold' 
   		   : 'text-gray-700 hover:text-blue-900'
  		}`}
		>
 		 Estimate
		</Link>
                <button 
                  onClick={() => {
                    setIsQuoteModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Header;
