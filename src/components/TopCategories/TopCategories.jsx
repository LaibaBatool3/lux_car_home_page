import React from 'react';
import CategoryCard from './CategoryCard';

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Motorcycle',
      icon: '🏍️',
      count: 120,
      description: 'Sport bikes, cruisers, and touring motorcycles'
    },
    {
      id: 2,
      name: 'SUVs',
      icon: '🚙',
      count: 85,
      description: 'Family-friendly SUVs and crossovers'
    },
    {
      id: 3,
      name: 'Sedan',
      icon: '🚗',
      count: 95,
      description: 'Luxury sedans and executive cars'
    },
    {
      id: 4,
      name: 'Truck',
      icon: '🚛',
      count: 67,
      description: 'Pickup trucks and commercial vehicles'
    }
  ];

  const handleCategoryClick = (category) => {
    console.log(`Clicked on ${category.name} category`);
    // Here you would typically navigate to a category page or filter results
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Top Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular vehicle categories. From luxury sedans to powerful trucks, 
            find the perfect vehicle for your needs.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category.name}
              icon={category.icon}
              count={category.count}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
