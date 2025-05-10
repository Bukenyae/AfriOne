import React, { useState } from 'react';

const data = {
  Kenya: Array.from({ length: 10 }, (_, i) => ({ img: `/images/kenya${i+1}.jpg`, caption: `Kenya Adventure ${i+1}` })),
  Tanzania: Array.from({ length: 10 }, (_, i) => ({ img: `/images/tanzania${i+1}.jpg`, caption: `Tanzania Experience ${i+1}` })),
};

export default function CenterLinks() {
  const [region, setRegion] = useState('Kenya');
  return (
    <section className="py-8 px-4" id="adventures">
      <div className="flex justify-center mb-4">
        {['Kenya', 'Tanzania'].map(r => (
          <button
            key={r}
            className={`px-4 py-2 mx-2 rounded ${region === r ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setRegion(r)}
          >
            {r} Experiences
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {data[region].map((item, i) => (
          <a
            key={i}
            href={`/experience/${region.toLowerCase()}/${i + 1}`}
            className="block overflow-hidden rounded-lg shadow-lg"
          >
            <img src={item.img} alt={item.caption} className="w-full h-32 object-cover" />
            <p className="p-2 text-center">{item.caption}</p>
          </a>
        ))}
      </div>
    </section>
);
}
