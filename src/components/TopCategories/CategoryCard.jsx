import React from 'react';

const CategoryCard = ({ category, icon, count, onClick }) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:border-red-300"
      onClick={onClick}
    >
      {/* Icon */}
      <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      
      {/* Category Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {category}
      </h3>
      
      {/* Count Badge */}
      <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-sm font-bold">
        {count}
      </div>
      
      {/* Hover effect indicator */}
      <div className="mt-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to explore
      </div>
    </div>
  );
};

export default CategoryCard;
