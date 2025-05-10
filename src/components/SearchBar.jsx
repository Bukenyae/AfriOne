import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const headerHeight = 64;
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - headerHeight - 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerClasses = sticky
    ? 'fixed top-0 left-0 w-full bg-white z-20 shadow-lg'
    : 'relative';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ destination, date, guests });
      }}
      className={`${containerClasses} mx-auto ${sticky ? 'mt-0' : 'mt-8'} flex items-center bg-white rounded-full shadow-lg divide-x divide-gray-300 overflow-hidden max-w-2xl`}
      style={sticky ? { padding: '0.5rem' } : { padding: '1rem' }}
    >
      <div className="flex-1 px-4 py-2">
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
      <div className="flex-1 px-4 py-2">
        <label className="block text-xs font-semibold text-gray-500">Date</label>
        <input
          type="text"
          placeholder="Add dates"
          onFocus={(e) => (e.target.type = 'date')}
          className="w-full text-sm placeholder-gray-400 focus:outline-none"
          required
        />
      </div>
      <div className="flex-1 px-4 py-2">
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
        className="flex items-center justify-center px-4 text-pink-500"
      >
        <FiSearch className="h-6 w-6" />
      </button>
    </form>
