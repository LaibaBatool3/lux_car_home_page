import React from 'react';
import BuyNowCard from './BuyNowCard';
import CarouselControls from '../shared/CarouselControls';
import car1 from '../../images/car1.png';
import car2 from '../../images/car2.png';
import car3 from '../../images/car3.png';
import car4 from '../../images/car4.png';

const items = [
  { image: car1, title: '"Hyundai Sonata"', creator: 'SalvadorDali', currentBid: '$750', buyPrice: '$6,000' },
  { image: car3, title: '"Chevrolet Cruise Limite…"', creator: 'Trista Francis', currentBid: '$750', buyPrice: '$22,000' },
  { image: car4, title: '"RAM 1500"', creator: 'Freddie Carpenter', currentBid: '$1,350', buyPrice: '$13,000' },
  { image: car2, title: '"Toyota FJ"', creator: 'Tyler Covington', currentBid: '$20,000', buyPrice: '$11,000' },
];

const BuyNowSection = () => {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="w-[1041px] max-w-full mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Buy Now</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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


