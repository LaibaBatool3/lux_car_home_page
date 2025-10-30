import React from 'react';
import Navigation from './Navigation';
import TopBar from './TopBar';
import heroCarImage from '../../assets/Background.png';
import { HeroSection } from '../HeroSection';

const Header = () => {
  return (
    <div 
      className="relative w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${heroCarImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <header className="relative z-10">
        <TopBar />
        <Navigation />
      </header>
      
      {/* Hero Section with transparent background */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default Header;
