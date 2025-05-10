import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ floating }) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ destination, date, guests });
  };

  const containerClasses = floating
    ? 'absolute left-1/2 transform -translate-x-1/2 bottom-10 w-full max-w-2xl'
    : 'max-w-4xl mx-auto mt-6';

  return (
    <form
      onSubmit={handleSearch}
      className={`${containerClasses} flex items-center bg-white rounded-full shadow-lg divide-x divide-gray-300 overflow-hidden`}
    >
      <div className="flex-1 px-6 py-3">
        <label className="block text-xs font-semibold text-gray-500">Where</label>
        <input
          type="text"
          placeholder="Search destinations"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full text-sm placeholder-gray-400 focus:outline-none"
          required
        />
      </div>
      <div className="flex-1 px-6 py-3">
        <label className="block text-xs font-semibold text-gray-500">Date</label>
        <input
          type="text"
          placeholder="Add dates"
          onFocus={(e) => e.target.type = 'date'}
          className="w-full text-sm placeholder-gray-400 focus:outline-none"
          required
        />
      </div>
      <div className="flex-1 px-6 py-3">
        <label className="block text-xs font-semibold text-gray-500">Who</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Add guests"
          className="w-full text-sm placeholder-gray-400 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 flex items-center justify-center"
      >
        <FiSearch className="h-6 w-6 text-pink-500" />
      </button>
    </form>
