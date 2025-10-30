import React, { useState } from 'react';
import logoImage from '../../assets/logo.png';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["How It Works", "Fees", "About", "Help", "Contact"];

  return (
    <nav className="w-full relative bg-transparent border-b border-white/20 text-white">
      {/* Navigation content */}
      <div className="relative z-10 app-wrap flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="LUX Logo" className="h-14 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-white capitalize" style={{
          marginLeft: '25px',
          whiteSpace: 'nowrap',
          fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: '0.875rem',
          fontWeight: 700,
          letterSpacing: '0'
        }}>
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-300 transition whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-8" style={{ marginLeft: '40px' }}>
          <button 
            className="flex items-center gap-1 text-white hover:text-gray-300 transition whitespace-nowrap"
            style={{
              fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0'
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="whitespace-nowrap">Login / SignUp</span>
          </button>

          <button 
            className="bg-[#E94141] hover:scale-105 transition-transform duration-200 text-white px-6 py-2 rounded-full whitespace-nowrap shadow-md"
            style={{
              fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0'
            }}
          >
            Try Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white relative z-10" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden relative z-10 pb-6">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <ul className="flex flex-col items-center gap-4 text-white text-lg font-medium pt-4">
              {navItems.map((item) => (
                <li key={item} className="cursor-pointer hover:text-gray-300 transition">
                  {item}
                </li>
              ))}
              <button className="flex items-center gap-2 text-white hover:text-gray-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Login / SignUp
              </button>
              <button className="bg-[#E94141] hover:scale-105 transition-transform duration-200 text-white font-medium px-6 py-2 rounded-full shadow-md">
                Try Demo
              </button>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
