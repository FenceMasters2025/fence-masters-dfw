import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Shield, Wrench, Truck } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Residential Fencing",
      description: "Custom fence solutions for homes including privacy, decorative, and security fencing.",
      features: ["Privacy Fences", "Picket Fences", "Pool Fencing", "Garden Fencing"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Fence Repair & Maintenance",
      description: "Expert repair services to extend the life of your existing fence investment.",
      features: ["Storm Damage Repair", "Gate Repair", "Post Replacement", "Maintenance Plans"]
    }
  ];

  const fenceTypes = [
    {
      name: "Wood Fencing",
      image: "/Wood Fencing.jpg",
      description: "Classic cedar and pine fencing options",
      price: "Starting at $36/ft"
    },
    {
      name: "Ornamental Steel Fencing",
      image: "/Ornamental Steel Fence.jpg",
      description: "Elegant and durable ornamental steel options",
      price: "Starting at $40/ft"
    },
    {
      name: "Privacy Fencing",
      image: "/07Rev-Euless Fence2.jpg",
      description: "Complete privacy with style options",
      price: "Starting at $41/ft"
    },
    {
      name: "Decorative Fencing",
      image: "/Decorative Fencing.jpg",
      description: "Beautiful ornamental fencing designs",
      price: "Starting at $44/ft"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Fencing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in residential fencing solutions that enhance your home's security, privacy, and curb appeal throughout the Dallas-Fort Worth area.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fence Types */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Fence Types We Install</h3>
          <p className="text-lg text-gray-600">Choose from our wide selection of high-quality fencing materials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fenceTypes.map((fence, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={fence.image} 
                  alt={fence.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{fence.name}</h4>
                <p className="text-gray-600 mb-4">{fence.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{fence.price}</span>
                  <Link
  			to="/contact"
  			className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block text-center"
			>
  			Learn More
			</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
          >
            Schedule Free Consultation
          </button>
        </div>
        
        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Services;
