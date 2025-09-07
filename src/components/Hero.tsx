import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  return (
    <>
      <section id="home" className="py-16 scroll-mt-20">
  <div className="max-w-7xl mx-auto px-4">
    {/* White card that sits on top of the new PageShell background */}
    <div className="bg-white/90 rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: headline + copy + buttons */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Premium Fence Installation in Dallas-Fort Worth
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Tired of your old fence?  You've come to the right place!!
	    Its time to transform your yard with a custom wood fence replacement. 
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
 	      className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
	    >
              Schedule Free Estimate
            </button>
            <a
              href="/gallery"
	      className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              View Our Work
            </a>
          </div>

          {/* small feature row */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-gray-600">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-gray-600">Fast Installation</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-gray-600">7-Year Warranty</p>
            </div>
          </div>
        </div>

        {/* Right: CTA panel — also white so the background shows */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="bg-white/95 rounded-xl ring-1 ring-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Get your free estimate today and transform your property with a beautiful new fence.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
	        className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
	      >
                Get Free Estimate
              </button>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Or call us directly:</p>
                <a
                  href="tel:214-493-3438"
                  className="text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
                >
                  (214) 493-3438
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Right */}
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