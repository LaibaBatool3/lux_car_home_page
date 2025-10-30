import React from 'react';

const Dot = ({ active }) => (
  <span
    className={`inline-block rounded-full transition-all duration-200 ${
      active ? 'w-4 h-4 ring-2 ring-[#0F1222] bg-transparent' : 'w-2.5 h-2.5 bg-[#0F1222]/40'
    }`}
  />
);

const IconButton = ({ left, onClick }) => (
  <button
    onClick={onClick}
    aria-label={left ? 'previous' : 'next'}
    className="p-1 text-[#0F1222] hover:opacity-80"
  >
    {left ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
    )}
  </button>
);

const CarouselControls = ({ total = 4, activeIndex = 1 }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-[#0F1222] select-none">
      <IconButton left />
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <Dot key={i} active={i === activeIndex} />
        ))}
      </div>
      <IconButton />
    </div>
  );
};

export default CarouselControls;


