import React from 'react';
import CategoryCard from './CategoryCard';
import AutomobilesImg from '../../assets/Automobiles.png';
import SuperCarsImg from '../../assets/SuperCars.png';
import MotorcycleImg from '../../assets/Motorcycle.png';
import ATVsImg from '../../assets/ATVs.png';
import BusImg from '../../assets/Bus.png';
import TruckImg from '../../assets/Truck.png';
import TrailerImg from '../../assets/Trailor.png';
import MotorHomeImg from '../../assets/MotorHome.png';

const TopCategories = () => {
  const items = [
    { title: 'Automobiles', image: AutomobilesImg, count: 6923 },
    { title: 'Super Cars', image: SuperCarsImg, count: 6923 },
    { title: 'Motorcycles', image: MotorcycleImg, count: 6923 },
    { title: 'ATVs', image: ATVsImg, count: 6923 },
    { title: 'Bus', image: BusImg, count: 6923 },
    { title: 'Truck', image: TruckImg, count: 6923 },
    { title: 'Trailer', image: TrailerImg, count: 6923 },
    { title: 'Motor Home', image: MotorHomeImg, count: 6923 }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Top Categories</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((it) => (
            <CategoryCard key={it.title} title={it.title} count={it.count} image={it.image} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-10">
          <button className="px-8 md:px-10 py-3.5 rounded-full bg-[#F3F3F6] shadow hover:shadow-md transition text-[#E94141] font-semibold" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
