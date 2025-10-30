import React from 'react';
import LocalOfferCard from './LocalOfferCard';

const data = [
  { image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800', title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
];

const LocalOffersSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Local Offers</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((o, i) => (
            <LocalOfferCard key={i} {...o} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-8 md:px-10 py-3.5 rounded-full bg-[#F3F3F6] shadow hover:shadow-md transition text-[#E94141] font-semibold" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocalOffersSection;


