import React from 'react';
import SearchBar from './SearchBar'; 
import rocket from '../../assets/rocket.png';
import bidding from '../../assets/bidding.png';

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
            className="mb-4 md:mb-5 text-5xl md:text-4xl font-semibold text-white tracking-tight"
          >
            Bid, Buy, Drive
          </h1>
          
          {/* Subtitle */}
          <h2 className="mb-3 md:mb-4 text-base md:text-4xl font-semibold text-white">
            <span className="text-white">Online Car Auctions</span> With Home Delivery!
          </h2>
          
          {/* Description */}
          <p className="mb-8 md:mb-10 max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Ejusmo 
          </p> 
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-14">
            <button 
              onClick={handleSellCar}
              className=" text-white border border-white/80 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {/* Rocket Icon */}
              <img src={rocket} alt="rocket" className="h-5 w-5" />
              
              <span>Sell Car</span>
            </button>
            
            <button 
              onClick={handleStartBidding}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {/* Auction Hammer/Gavel Icon */}
              <img src={bidding} alt="bidding" className="h-5 w-5" />
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
