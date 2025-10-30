import React from 'react';

const Chip = ({ children, color = '#E94141' }) => (
  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ backgroundColor: color, color: '#fff' }}>{children}</span>
);

const Timer = ({ text }) => (
  <div className="flex items-center gap-1 text-[10px] text-gray-700 bg-white px-2 py-1 rounded-full shadow">
    <svg className="w-3.5 h-3.5 text-[#E94141]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    {text}
  </div>
);

const LikeBadge = () => (
  <div className="flex items-center gap-1 text-[10px] text-white bg-black/70 px-2 py-1 rounded-full">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>
    100
  </div>
);

const LocalOfferCard = ({ image, title, transmission, location, mileage }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 md:p-4">
      <div className="relative overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full h-44 md:h-56 object-cover" />
        <div className="absolute top-3 right-3"><LikeBadge /></div>
        <div className="absolute bottom-3 left-3"><Timer text="05 : 12 : 07 : 45" /></div>
      </div>

      <div className="pt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-900 font-semibold text-sm md:text-base">{title}</h3>
          <Chip>OFFER</Chip>
        </div>
        <div className="grid grid-cols-2 gap-y-1 text-[11px] text-gray-500">
          <div>Transmission: <span className="text-gray-700">{transmission}</span></div>
          <div className="text-right">Mileage <span className="text-gray-700">{mileage}</span></div>
          <div className="col-span-2">Location: <span className="text-gray-700">{location}</span></div>
        </div>
      </div>
    </div>
  );
};

export default LocalOfferCard;


