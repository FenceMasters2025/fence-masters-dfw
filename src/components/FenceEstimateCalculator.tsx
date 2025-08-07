import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Info, Phone, Mail } from 'lucide-react';
import QuoteModal from './QuoteModal';

interface EstimateData {
  fenceLength: string;
  fenceType: string;
  fenceHeight: string;
  numberOfGates: string;
  gateType: string;
  propertyType: string;
  installationComplexity: string;
}

const FenceEstimateCalculator = () => {
  const [estimateData, setEstimateData] = useState<EstimateData>({
    fenceLength: '',
    fenceType: '',
    fenceHeight: '6',
    numberOfGates: '1',
    gateType: 'standard',
    propertyType: 'residential',
    installationComplexity: 'standard',
  });

  const [estimate, setEstimate] = useState<{
    materialCost: number;
    laborCost: number;
    additionalCosts: number;
    totalCost: number;
    priceRange: { min: number; max: number };
  } | null>(null);

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Pricing structure per linear foot
  const fencePricing = {
    'cedar-side-by-side': { 6: 35, 8: 48 },
    'cedar-board-on-board': { 6: 41, 8: 60 },
    'cedar-custom': { 6: 45, 8: 65 },
    'ornamental-steel': { 6: 42, 8: 58 }
  };

  const gatePricing = {
    'standard': 350,
    'double': 650
  };

  const complexityMultipliers = {
    'easy': 0.9,
    'standard': 1.0,
    'complex': 1.25,
    'very-complex': 1.5
  };

  useEffect(() => {
    calculateEstimate();
  }, [estimateData]);

  const calculateEstimate = () => {
    const length = parseFloat(estimateData.fenceLength);
    const gates = parseInt(estimateData.numberOfGates);
    const height = estimateData.fenceHeight;

    if (!length || length <= 0 || !estimateData.fenceType) {
      setEstimate(null);
      return;
    }

    const fenceTypeKey = estimateData.fenceType as keyof typeof fencePricing;
    const fenceTypePricing = fencePricing[fenceTypeKey];
    
    if (!fenceTypePricing) {
      setEstimate(null);
      return;
    }

    // Get base price per linear foot based on height
    let basePricePerFoot = 0;
    
    if (height === '4') {
      // 4ft is typically 85% of 6ft price
      basePricePerFoot = fenceTypePricing[6] * 0.85;
    } else if (height === '6') {
      basePricePerFoot = fenceTypePricing[6];
    } else if (height === '8') {
      basePricePerFoot = fenceTypePricing[8];
    } else if (height === 'custom') {
      // Custom height is 150% of 8ft price
      basePricePerFoot = fenceTypePricing[8] * 1.5;
    }

    const complexityMultiplier = complexityMultipliers[estimateData.installationComplexity as keyof typeof complexityMultipliers] || 1.0;

    // Calculate fence cost
    const fenceCost = basePricePerFoot * length * complexityMultiplier;

    // Gate costs
    const gateTypeKey = estimateData.gateType as keyof typeof gatePricing;
    const gateCost = gatePricing[gateTypeKey] * gates;

    // Total cost
    const totalCost = fenceCost + gateCost;

    // Create price range (±15%)
    const priceRange = {
      min: Math.round(totalCost * 0.85),
      max: Math.round(totalCost * 1.15)
    };

    setEstimate({
      materialCost: 0, // Not used anymore
      laborCost: 0, // Not used anymore  
      additionalCosts: 0, // Not used anymore
      totalCost: Math.round(totalCost),
      priceRange
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setEstimateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Ballpark Estimate</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate for your fence installation project. Our calculator provides pricing based on your specific requirements and project details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Project Details</h2>
              </div>

              <div className="space-y-6">
                {/* Fence Length */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fence Length (Linear Feet) *
                  </label>
                  <input
                    type="number"
                    name="fenceLength"
                    value={estimateData.fenceLength}
                    onChange={handleInputChange}
                    placeholder="Enter total linear feet"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    required
                  />
                </div>

                {/* Fence Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fence Type *
                  </label>
                  <select
                    name="fenceType"
                    value={estimateData.fenceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Fence Type</option>
                    <option value="cedar-side-by-side">Cedar Side-by-Side</option>
                    <option value="cedar-board-on-board">Cedar Board-on-Board</option>
                    <option value="cedar-custom">Cedar Custom</option>
                    <option value="ornamental-steel">Ornamental Steel Fence</option>
                  </select>
                </div>

                {/* Fence Height */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fence Height (Feet)
                  </label>
                  <select
                    name="fenceHeight"
                    value={estimateData.fenceHeight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="4">4 feet</option>
                    <option value="6">6 feet</option>
                    <option value="8">8 feet</option>
                    <option value="custom">Custom Height</option>
                  </select>
                </div>

                {/* Number of Gates */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Gates
                  </label>
                  <select
                    name="numberOfGates"
                    value={estimateData.numberOfGates}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="0">No Gates</option>
                    <option value="1">1 Gate</option>
                    <option value="2">2 Gates</option>
                    <option value="3">3 Gates</option>
                    <option value="4">4+ Gates</option>
                  </select>
                </div>

                {/* Gate Type */}
                {parseInt(estimateData.numberOfGates) > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gate Type
                    </label>
                    <select
                      name="gateType"
                      value={estimateData.gateType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="standard">Standard Single Gate</option>
                      <option value="double">Double Gate</option>
                    </select>
                  </div>
                )}

                {/* Installation Complexity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Installation Complexity
                  </label>
                  <select
                    name="installationComplexity"
                    value={estimateData.installationComplexity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus="ring-blue-500 focus:border-transparent"
                  >
                    <option value="easy">Easy (Flat ground, no obstacles)</option>
                    <option value="standard">Standard (Minor slopes, few obstacles)</option>
                    <option value="complex">Complex (Steep slopes, utilities, landscaping)</option>
                    <option value="very-complex">Very Complex (Multiple obstacles, difficult access)</option>
                  </select>
                </div>


              </div>
            </div>

            {/* Estimate Results */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Your Estimate</h2>
              </div>

              {estimate ? (
                <div className="space-y-6">
                  {/* Estimated Total */}
                  <div className="bg-blue-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ballpark Estimate</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${estimate.totalCost.toLocaleString()}
                    </div>
                    <p className="text-gray-600">
                      Based on your project specifications
                    </p>
                  </div>

                  {/* Price Range */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Expected Price Range</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      ${estimate.priceRange.min.toLocaleString()} - ${estimate.priceRange.max.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">
                      Final pricing may vary based on site conditions, material availability, and specific requirements.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
                    >
                      Get Accurate Quote
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="tel:214-493-3438"
                        className="flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                      <a
                        href="mailto:info@fencemastersdfw.com"
                        className="flex items-center justify-center border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Enter Project Details</h3>
                  <p className="text-gray-500">
                    Fill out the form on the left to get your instant estimate
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>
                      This calculator provides estimated pricing based on typical installations. 
                      Final pricing requires an on-site evaluation to account for specific site conditions, 
                      local regulations, and material availability. All estimates include a 7-year warranty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Instant Estimates</h3>
              <p className="text-gray-600">Get immediate pricing based on your project specifications</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">See detailed cost breakdowns for materials, labor, and extras</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Consultation</h3>
              <p className="text-gray-600">Connect with our team for personalized recommendations</p>
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

export default FenceEstimateCalculator;
