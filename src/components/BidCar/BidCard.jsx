import React from 'react';

const BidCard = ({ image, title, lot, status, location, currentBid }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 md:p-4">
      <div className="relative overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full h-44 md:h-56 object-cover" />
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>
          100
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-3">{title}</h3>
        <ul className="text-xs text-gray-500 space-y-1 mb-3">
          <li>Lot: {lot}</li>
          <li>Status: {status}</li>
          <li>Location: {location}</li>
        </ul>
        <div className="text-gray-900 text-sm md:text-base font-semibold mb-3">
          Current Bid: <span className="font-bold">{currentBid}</span>
        </div>
        <button className="w-full bg-[#E94141] text-white rounded-lg py-2.5 hover:scale-[1.02] transition">Bid Now</button>
      </div>
    </div>
  );
};

export default BidCard;


