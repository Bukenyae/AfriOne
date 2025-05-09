import React from 'react';

export default function HeaderSection() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full z-10">
      <div className="text-xl font-bold">Africa Trip Advisor</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
