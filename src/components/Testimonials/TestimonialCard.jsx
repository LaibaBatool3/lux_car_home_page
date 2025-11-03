import React from 'react';

const TestimonialCard = ({ quote, name, role, avatar, cardClass = '' }) => {
  // Convert newlines to line breaks
  const formattedQuote = quote.split('\n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className={`bg-white rounded-3xl shadow-md hover:shadow-lg transition p-8 pb-16 text-center relative flex flex-col ${cardClass}`}>
      <p className="text-[#062A3F] text-[10px] leading-4 flex-1 flex items-center justify-center text-center px-2 whitespace-pre-line">
        {formattedQuote}
      </p>

      <div className="mt-6 relative z-20">
        <h4 className="text-[#062A3F] font-semibold text-xl">{name}</h4>
        <p className="text-[#82929B] text-sm">{role}</p>
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


