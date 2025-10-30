import React, { useState } from 'react';

const TopBar = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC+00:00');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const timezones = [
    'UTC+00:00',
    'UTC+01:00',
    'UTC+02:00',
    'UTC+03:00',
    'UTC-05:00',
    'UTC-08:00'
  ];

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese'
  ];

  return (
    <div className="py-2 bg-[#7A798A]/90 text-white border-b border-white/10">
      <div className="max-w-full mx-auto px-4 md:px-16 lg:px-44 xl:px-64 flex justify-between items-center">
        {/* Left side - Auction announcement */}
        <div className="flex items-center">
          <span 
            className="text-white uppercase"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}
          >
            BMW XYZ 2018 IS GOING LIVE FOR AUCTION IN 5 MINUTES!!
          </span>
        </div>
        
        {/* Right side - Timezone and Language selectors */}
        <div className="flex space-x-3">
          {/* Timezone Selector */}
          <div className="relative">
            <select 
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              className="bg-transparent border border-white/40 text-gray-100 px-3 py-1 pr-6 rounded appearance-none cursor-pointer hover:border-white/60 transition-colors duration-200 text-xs"
              style={{
                fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400
              }}
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz} className="text-gray-900">{tz} UTC</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
              <svg className="w-3 h-3 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent border border-white/40 text-gray-100 px-3 py-1 pr-6 rounded appearance-none cursor-pointer hover:border-white/60 transition-colors duration-200 text-xs"
              style={{
                fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400
              }}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="text-gray-900">{lang}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
              <svg className="w-3 h-3 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
