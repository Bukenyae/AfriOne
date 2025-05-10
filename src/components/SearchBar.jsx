import React, { useState } from 'react';

export default function SearchBar() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ destination, date, guests });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-4xl mx-auto mt-6 flex items-center bg-white bg-opacity-90 p-4 rounded-lg shadow-lg space-x-4"
    >
      <input
        type="text"
        placeholder="Search destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="flex-1 p-2 border rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="w-20 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
);
}
