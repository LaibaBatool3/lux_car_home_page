import React from 'react';

const TestimonialCard = ({ quote, name, role, avatar, cardClass = '' }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-md hover:shadow-lg transition p-8 text-center relative ${cardClass}`}>
      <p className="text-[#1E2B3A]/80 leading-7 max-w-xl mx-auto">
        {quote}
      </p>

      <div className="mt-8">
        <h4 className="text-[#102A43] font-semibold text-xl">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
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


