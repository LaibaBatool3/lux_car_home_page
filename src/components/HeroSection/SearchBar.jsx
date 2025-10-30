import React, { useState } from 'react';

const SearchBar = () => {
  const [filters, setFilters] = useState({
    vinLot: '',
    carType: 'All Vehicles',
    model: 'All Models',
    source: 'COPART',
    from: '09/01/2024',
    to: '12/01/2024'
  });

  const handleInputChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  const carTypes = ['All Vehicles', 'Cars', 'Trucks', 'SUVs', 'Motorcycles', 'Boats'];
  const models = ['All Models', 'BMW', 'Mercedes', 'Audi', 'Porsche', 'Ferrari'];
  const sources = ['COPART', 'IAA', 'Manheim', 'Adesa', 'Other'];

  return (
    <div
      className="w-full rounded-2xl bg-white/95 backdrop-blur-md px-4 md:px-6 py-4 shadow-lg"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
    >
      <div className="flex flex-col lg:flex-row lg:items-end gap-3">
        {/* VIN/Lot */}
        <div className="flex-1">
          <div className="text-gray-700 text-sm mb-2">VIN/Lot</div>
          <input
            type="text"
            placeholder="Type Here..."
            value={filters.vinLot}
            onChange={(e) => handleInputChange('vinLot', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-10 bg-gray-200" />

        {/* Car Type */}
        <div className="flex-1">
          <div className="text-gray-700 text-sm mb-2">Car Type</div>
          <div className="relative">
            <select
              value={filters.carType}
              onChange={(e) => handleInputChange('carType', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none appearance-none text-gray-900"
            >
              {carTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200" />

        {/* Model */}
        <div className="flex-1">
          <div className="text-gray-700 text-sm mb-2">Model</div>
          <div className="relative">
            <select
              value={filters.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none appearance-none text-gray-900"
            >
              {models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200" />

        {/* Source */}
        <div className="flex-1">
          <div className="text-gray-700 text-sm mb-2">Source</div>
          <div className="relative">
            <select
              value={filters.source}
              onChange={(e) => handleInputChange('source', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none appearance-none text-gray-900"
            >
              {sources.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200" />

        {/* Date range */}
        <div className="flex-[1.4]">
          <div className="text-gray-700 text-sm mb-2">Date</div>
          <div className="w-full flex items-center gap-3">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </span>
              <input
                type="text"
                value={filters.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
                className="w-full pl-9 pr-3 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none placeholder:text-gray-400"
              />
            </div>
            <span className="text-gray-400">–</span>
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </span>
              <input
                type="text"
                value={filters.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                className="w-full pl-9 pr-3 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Search button */}
        <div className="flex items-end justify-end">
          <button
            onClick={handleSearch}
            className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-[#E94141] text-white flex items-center justify-center shadow-md hover:scale-105 transition"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
