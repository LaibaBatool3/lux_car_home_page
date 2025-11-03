import React from 'react';

const MAKES = [
  'Honda','BMW','Bentley','Acura','Alfa Romeo','Chevrolet','Chrysler','Ferrari','Lamborghini','Land Rover','Yamaha ATV','Nissan','KIA','Ducati Motorcycle','Kawasaki Atv'
];

const Chip = ({ label }) => (
  <span className="inline-block text-center px-2 py-1 rounded-md bg-[#F3F3F6] text-[#1E1B2D] text-[10px] shadow-sm whitespace-nowrap">
    {label}
  </span>
);

const Row = ({ labels, centered = false }) => {
  const rowContent = (
    <div
      className="grid gap-2 mb-3"
      style={{ gridTemplateColumns: `repeat(${labels.length}, max-content)` }}
    >
      {labels.map((m) => (
        <Chip key={m} label={m} />
      ))}
    </div>
  );
  
  return centered ? (
    <div className="flex justify-center">
      {rowContent}
    </div>
  ) : rowContent;
};

const PopularMakesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-[1041px] max-w-full mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D] mb-2">Popular Makes</h2>
        <div className="mb-10 flex justify-center">
          <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
        </div>

        {/* Three fixed rows that never wrap */}
        <div className="space-y-4">
          <Row labels={MAKES} />
          <Row labels={MAKES} />
          <Row labels={['Honda','BMW','Bentley','Acura','Alfa Romeo','Chevrolet','Chrysler','Ferrari','Lamborghini','Land Rover','Yamaha ATV']} centered={true} />
        </div>
      </div>
    </section>
  );
};

export default PopularMakesSection;


