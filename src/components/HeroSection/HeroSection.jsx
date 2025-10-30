import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  const handleStartBidding = () => {
    console.log('Starting bidding process...');
    // Here you would typically navigate to auctions page or open a modal
  };

  const handleSellCar = () => {
    console.log('Selling car...');
  };

  return (
    <section 
      className="relative text-white w-full min-h-[calc(100vh-80px)] md:min-h-[750px]"
    >
      {/* Content - Centered */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center pt-20">
        <div className="app-wrap text-center">
          {/* Main Title */}
          <h1 
            className="mb-4 md:mb-5 text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Bid, Buy, Drive
          </h1>
          
          {/* Subtitle */}
          <h2 className="mb-3 md:mb-4 text-base md:text-2xl font-semibold text-white">
            <span className="text-[#E94141]">Online Car Auctions</span> With Home Delivery!
          </h2>
          
          {/* Description */}
          <p className="mb-8 md:mb-10 max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Ejusmo
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-14">
            <button 
              onClick={handleSellCar}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {/* Rocket Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Sell Car</span>
            </button>
            
            <button 
              onClick={handleStartBidding}
              className="bg-[#E94141] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {/* Auction Hammer/Gavel Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 14H4V8h16v10z"/>
                <path d="M12 10l-4 4h3v4h2v-4h3l-4-4z"/>
              </svg>
              <span>Start Bidding</span>
            </button>
          </div>
        </div>
        
        {/* Search Bar - Positioned at bottom */}
        <div className="w-full app-wrap">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
