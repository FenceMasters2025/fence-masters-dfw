import React from 'react';
import { Users, Award, Clock, MapPin, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "1,000+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "13+", label: "Years Experience" },
    { icon: <Clock className="w-8 h-8" />, number: "24hr", label: "Response Time" },
    { icon: <MapPin className="w-8 h-8" />, number: "20+", label: "Cities Served" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Dallas-Fort Worth's Trusted Fence Installation Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, Fence Masters DFW has been the go-to choice for residential fencing solutions throughout the Dallas-Fort Worth metroplex. Our commitment to quality craftsmanship and exceptional customer service has made us the region's most trusted residential fencing contractor.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on using only the highest quality materials and employing skilled craftsmen who take pride in every installation. From initial consultation to final inspection, we ensure your fencing project exceeds expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">To provide superior fencing solutions that enhance property value, security, and curb appeal while delivering exceptional customer service.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Our Promise</h4>
                <p className="text-gray-600 text-sm">Every fence we install comes with our 7-year warranty and satisfaction guarantee. We stand behind our work.</p>
              </div>
            </div>

            
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Fence Masters DFW?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Licensed and insured with full liability coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Free estimates with detailed project planning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Quality materials from trusted suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Professional installation by experienced crews</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">7-year warranty on all installations</span>
                </li>
             {/* Customer Satisfaction Button */}
            <div className="mt-6">
              <a
                href="https://www.google.com/search?q=Fence+Masters+DFW&rlz=1C1CHBF_enUS1234US1234&oq=Fence+Masters+DFW&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEINDc2N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x864c19f77192b5ed:0x123456789abcdef0,1,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="mr-2">Customer Satisfaction - 4.9</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'text-yellow-200 fill-current' : 'text-yellow-200'
                      }`}
                    />
                  ))}
                </div>
              </a>
            </div>
              
              </ul>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
