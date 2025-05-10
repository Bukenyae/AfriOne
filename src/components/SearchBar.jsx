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
      className={`${containerClasses} mx-auto mt-${sticky ? '0' : '8'} flex items-center bg-white rounded-full shadow-lg divide-x divide-gray-300 overflow-hidden max-w-2xl`}
      style={sticky ? { padding: '0.5rem' } : { padding: '1rem' }}
    >
      {/* Inputs omitted for brevity */}
    </form>
}
