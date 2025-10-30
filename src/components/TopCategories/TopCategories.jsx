import React from 'react';
import CategoryCard from './CategoryCard';

const TopCategories = () => {
  const items = [
    { title: 'Automobiles', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=200&fit=crop', count: 6923 },
    { title: 'Super Cars', image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop', count: 6923 },
    { title: 'Motorcycles', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=200&h=200&fit=crop', count: 6923 },
    { title: 'ATVs', image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=200&h=200&fit=crop', count: 6923 },
    { title: 'Bus', image: 'https://images.unsplash.com/photo-1494515840801-78edb435c08b?w=200&h=200&fit=crop', count: 6923 },
    { title: 'Truck', image: 'https://images.unsplash.com/photo-1537819191375-6c3d8e72b33f?w=200&h=200&fit=crop', count: 6923 },
    { title: 'Trailer', image: 'https://images.unsplash.com/photo-1619646074360-74c6aac9f5fd?w=200&h=200&fit=crop', count: 6923 },
    { title: 'Motor Home', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&h=200&fit=crop', count: 6923 }
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
