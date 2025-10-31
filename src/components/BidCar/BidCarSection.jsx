import React from 'react';
import BidCard from './BidCard';
import img1 from '../../images/bmwx.png';
import img2 from '../../images/bmwxi.png';
import img3 from '../../images/bmwxii.png';
import img4 from '../../images/bmwxiii.png';

const mock = [
  { image: img1, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img2, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img3, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img4, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img1, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img2, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img3, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
  { image: img4, title: '“2018 BMW X1 XDRIVE”', lot: '3849858', status: '3849858', location: '3849858', currentBid: '$1,300.00' },
];

const BidCarSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="app-wrap">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Bid Car</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-1 w-16 bg-[#E94141] rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mock.map((i, idx) => (
            <BidCard key={idx} {...i} />
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

export default BidCarSection;


