import React from 'react';
import destinationImage from '../../assets/Destination.png';
import pinIcon from '../../assets/Vector.png';
import CarouselControls from '../shared/CarouselControls';

const tags = [
  'ABACO','FREEPORT','BIMINI','NASSAU','ELEUTHERA','EXUMA','LONG ISLAND','ANDROS','CHUB CAY','RUM CAY'
];

const DestinationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-[1041px] max-w-full mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Destinations</h2>
          <div className="mt-2 mb-6 flex justify-center">
          <span className="h-1 w-16 bg-[#E94141] rounded-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <p className="text-xs md:text-sm text-[#7A798A] md:flex-1">
            Lorem ipsum dolor sit amet. Vel aliquid reiciendis et molestias dignissimos quo eligendi eaque eum iusto explicabo et incidunt cupiditate. Est nemo delectus est quia Quis vel pariatur autem et veniam Quis id vero blanditiis. Ut esse commodi et nulla ullam qui laudantium consequatur est rerum deserunt est Quis nobis qui velit doloribus.
          </p>
          <div className="md:pl-6 md:self-start">
            <button className="px-4 py-2 rounded-full border border-[#CA0000] text-[#CA0000] hover:bg-[#CA0000] hover:text-white transition text-sm whitespace-nowrap">
              How it Works?
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 shadow-sm p-4 md:p-5">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={destinationImage} alt="Destination" className="w-full h-[260px] md:h-[380px] object-cover" />
            {/* Arrows */}
            <button aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white">
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white">
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1 px-3">
              {tags.map((t, i) => (
                <div key={t} className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] shadow whitespace-nowrap flex-shrink-0 ${i===0 ? 'bg-[#CA0000] text-white' : 'bg-white text-black'}`}>
                  {i === 0 ? (
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="9" r="2.5" fill="white"/>
                    </svg>
                  ) : (
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#CA0000" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="9" r="2.5" fill="white"/>
                    </svg>
                  )}
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <CarouselControls total={4} activeIndex={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;


