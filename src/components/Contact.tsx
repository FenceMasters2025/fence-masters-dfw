import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Star } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Contact = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Your Free Estimate Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your property with a beautiful new fence? Contact us for a free consultation and detailed estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <a
                        href="tel:214-493-3438"
                        className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        (214) 493-3438
                      </a>
                      <p className="text-sm text-gray-600">Call for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">info@fencemastersdfw.com</p>
                      <p className="text-sm text-gray-600">Email for quotes and questions</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Dallas-Fort Worth Area</p>
                      <p className="text-sm text-gray-600">Serving all DFW communities</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Mon-Fri: 7AM-7PM</p>
                      <p className="text-sm text-gray-600">Saturday: 8AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fallback Button */}
              <div className="text-center">
                <a
                  href="https://calendly.com/fencemastersdfw-info/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Appointment
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-lg border-2 border-blue-100">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Get your detailed free estimate in just a few clicks. Our comprehensive quote form ensures we have all the information needed to provide you with an accurate estimate for your fencing project.
                  </p>

                  <div className="space-y-4 mb-8">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Get Your Free Estimate Now
                    </button>
                    <a
                      href="https://calendly.com/fencemastersdfw-info/new-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Appointment Online
                    </a>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2">Prefer to talk? Call us directly:</p>
                      <a
                        href="tel:214-493-3438"
                        className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        (214) 493-3438
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Free Quotes & Design Consultations
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Response within 24 hours
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Licensed & insured
                    </div>
                  </div>

                  {/* Customer Satisfaction Button */}
                  <div className="mt-6">
                    <a
                      href="https://www.google.com/search?q=Fence+Masters"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                    >
                      <span className="mr-2">Customer Satisfaction - 4.9</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < 4 ? 'text-yellow-200 fill-current' : 'text-yellow-200'}`}
                          />
                        ))}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Dallas', 'Fort Worth', 'Plano', 'Frisco', 'McKinney', 'Allen',
                'Arlington', 'Grand Prairie', 'Irving', 'Garland', 'Mesquite', 'Carrollton',
                'Richardson', 'Lewisville', 'Flower Mound', 'Grapevine', 'Euless', 'Bedford'
              ].map((city, index) => (
                <div key={index} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {city}
                </div>
              ))}
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

export default Contact;