import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/elephant.jpg)' }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-5xl text-white font-bold">Discover Africa</h1>
        <p className="mt-4 text-xl text-white">Join unforgettable adventures in Kenya and Tanzania</p>
      </div>
    </section>
  );
}
