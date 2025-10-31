import React from 'react';
import LocalOfferCard from './LocalOfferCard';
import car1 from '../../images/car1.png';
import car2 from '../../images/car2.png';
import car3 from '../../images/car3.png';
import car4 from '../../images/car4.png';

const data = [
  { image: car1, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car2, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car3, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car4, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car1, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car2, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car3, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
  { image: car4, title: '“Hyundai Sonata”', transmission: 'Automatic', location: 'America Washington', mileage: '17090' },
];

const LocalOffersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="app-wrap">
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


