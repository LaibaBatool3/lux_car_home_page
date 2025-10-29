import React, { useState } from 'react';

const SearchBar = () => {
  const [searchFilters, setSearchFilters] = useState({
    carType: 'All Cars',
    model: 'All Models',
    priceRange: 'All Price'
  });

  const handleFilterChange = (filterType, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', searchFilters);
    // Here you would typically call an API or update state
  };

  const carTypes = ['All Cars', 'Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'];
  const models = ['All Models', 'BMW', 'Audi', 'Mercedes-Benz', 'Toyota', 'Honda', 'Ford', 'Chevrolet'];
  const priceRanges = ['All Price', '$0-$10k', '$10k-$25k', '$25k-$50k', '$50k+'];

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Car Type Dropdown */}
        <select 
          value={searchFilters.carType}
          onChange={(e) => handleFilterChange('carType', e.target.value)}
          className="flex-1 min-w-32 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          {carTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {/* Model Dropdown */}
        <select 
          value={searchFilters.model}
          onChange={(e) => handleFilterChange('model', e.target.value)}
          className="flex-1 min-w-32 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        {/* Price Range Dropdown */}
        <select 
          value={searchFilters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          className="flex-1 min-w-32 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          {priceRanges.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>🔍</span>
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
