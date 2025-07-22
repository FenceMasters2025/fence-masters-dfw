import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Fence Installation in Dallas-Fort Worth
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Transform your property with custom fencing solutions. Licensed, insured, and trusted by over 1,000+ satisfied customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
              >
                Schedule Free Estimate
              </button>
              <a 
                href="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg text-center"
              >
                View Our Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-600">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-sm text-blue-100">Licensed & Insured</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-sm text-blue-100">Fast Installation</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-sm text-blue-100">7-Year Warranty</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-start">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Get your free estimate today and transform your property with a beautiful new fence.
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
                >
                  Get Free Estimate
                </button>
                <div className="text-center">
                  <p className="text-blue-100 text-sm mb-2">Or call us directly:</p>
                  <a 
                    href="tel:214-493-3438"
                    className="text-2xl font-bold text-white hover:text-orange-300 transition-colors"
                  >
                    (214) 493-3438
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Hero;