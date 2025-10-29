import React from 'react';
import SearchBar from './SearchBar';
import heroCarImage from '../../assets/Background.png';

const HeroSection = () => {
  const handleStartBidding = () => {
    console.log('Starting bidding process...');
    // Here you would typically navigate to auctions page or open a modal
  };

  return (
    <section 
      className="relative text-white"
      style={{
        width: '1920px',
        height: '750px',
        top: '40px',
        opacity: 1,
        backgroundImage: `url(${heroCarImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Online Car Auctions With{' '}
                <span className="text-red-500">Home Delivery!</span>
              </h1>
              
              <p className="text-gray-200 text-lg leading-relaxed">
                Discover premium vehicles from trusted dealers. Bid on luxury cars, 
                classic automobiles, and modern vehicles with confidence. Fast, secure, 
                and delivered right to your doorstep.
              </p>
              
              <button 
                onClick={handleStartBidding}
                className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Start Bid or Buy</span>
                <span>🚗</span>
              </button>
              
              {/* Search Bar */}
              <div className="pt-4">
                <SearchBar />
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Verified Dealers</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Free Delivery</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Car Image (now background) */}
            <div className="relative order-2 md:order-1">
              {/* This space is now filled by the background image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
