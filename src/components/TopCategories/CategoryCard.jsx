import React from 'react';

const CategoryCard = ({ title, count, image }) => {
  return (
    <div
      className="rounded-2xl bg-white p-4 md:p-5 shadow-md hover:shadow-lg transition relative"
      style={{ boxShadow: '0 10px 30px rgba(3,37,76,0.18)' }}
    >
      <div className="flex items-center gap-4">
        {/* Image with badge */}
        <div className="relative shrink-0">
          <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
          <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#E94141] text-white grid place-items-center shadow">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </span>
        </div>

        {/* Texts */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base md:text-lg leading-tight">{title}</h3>
          <p className="text-gray-500 text-sm">{count} Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
