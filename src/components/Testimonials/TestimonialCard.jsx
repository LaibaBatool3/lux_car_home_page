import React from 'react';

const TestimonialCard = ({ quote, name, role, avatar, cardClass = '' }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-md hover:shadow-lg transition p-8 pb-16 text-center relative flex flex-col ${cardClass}`}>
      <p className="text-[#1E2B3A]/80 leading-7 flex-1 flex items-center justify-center">
        {quote}
      </p>

      <div className="mt-6 relative z-20">
        <h4 className="text-[#102A43] font-semibold text-xl">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10">
        <img
          src={avatar}
          alt={name}
          className="h-24 w-24 rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;


