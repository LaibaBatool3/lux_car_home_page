import React from 'react';

const MAKES = [
  'Honda','BMW','Bentley','Acura','Alfa Romeo','Chevrolet','Chrysler','Ferrari','Lamborghini','Land Rover','Yamaha ATV','Nissan','KIA','Ducati Motorcycle','Kawasaki Atv'
];

const Chip = ({ label }) => (
  <span className="w-full text-center px-2 py-1 md:px-3 md:py-2 rounded-md bg-[#F3F3F6] text-[#1E1B2D] text-xs md:text-sm shadow-sm whitespace-nowrap">
    {label}
  </span>
);

const Row = ({ labels }) => (
  <div
    className="grid gap-3 mb-4"
    style={{ gridTemplateColumns: `repeat(${labels.length}, minmax(0, 1fr))` }}
  >
    {labels.map((m) => (
      <Chip key={m} label={m} />
    ))}
  </div>
);

const PopularMakesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Popular Makes</h2>
        <div className="mt-2 mb-8 flex justify-center">
          <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
        </div>

        {/* Three fixed rows that never wrap */}
        <Row labels={MAKES} />
        <Row labels={MAKES} />
        <Row labels={['Honda','BMW','Bentley','Acura','Alfa Romeo','Chevrolet','Chrysler','Ferrari','Lamborghini','Land Rover','Yamaha ATV']} />
      </div>
    </section>
  );
};

export default PopularMakesSection;


