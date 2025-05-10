import React from 'react';
import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/elephant.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl text-white font-bold">Discover Africa</h1>
        <p className="mt-4 text-xl text-white">Join unforgettable adventures in Kenya and Tanzania</p>
        <div className="w-full max-w-2xl mt-8">
          <SearchBar />
        </div>
      </div>
    </section>
}
