import React from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <TopBar />
      <Navigation />
    </header>
  );
};

export default Header;
