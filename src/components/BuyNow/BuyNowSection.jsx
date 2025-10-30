import React from 'react';
import BuyNowCard from './BuyNowCard';
import CarouselControls from '../shared/CarouselControls';

const items = [
  { image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800', title: '“Hyundai Sonata”', creator: 'SalvadorDali', currentBid: '$750', buyPrice: '$6,000' },
  { image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800', title: '“Chevrolet Cruise Limite…”', creator: 'Trista Francis', currentBid: '$750', buyPrice: '$22,000' },
  { image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', title: '“RAM 1500”', creator: 'Freddie Carpenter', currentBid: '$1,350', buyPrice: '$13,000' },
  { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', title: '“Toyota FJ”', creator: 'Tyler Covington', currentBid: '$20,000', buyPrice: '$11,000' },
];

const BuyNowSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="app-wrap">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Buy Now</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <BuyNowCard key={idx} {...it} />
          ))}
        </div>
        <div className="mt-8">
          <CarouselControls total={4} activeIndex={1} />
        </div>

      </div>
    </section>
  );
};

export default BuyNowSection;


