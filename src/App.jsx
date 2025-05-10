import React from 'react';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import CenterLinks from './components/CenterLinks';

export default function App() {
  return (
    <div className="App">
      <HeaderSection />
      <HeroSection />
      <SearchBar />
      <CenterLinks />
    </div>
  );
}
