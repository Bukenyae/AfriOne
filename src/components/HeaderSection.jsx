import React from 'react';

export default function HeaderSection() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Africa Trip Advisor" className="h-8 w-auto" />
        </div>
        <nav className="flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">AfriOne</a>
          <a href="#adventures" className="text-gray-700 hover:text-blue-500 font-medium">Adventures</a>
        </nav>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
