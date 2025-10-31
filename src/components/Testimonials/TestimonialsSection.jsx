import React from 'react';
import TestimonialCard from './TestimonialCard';
import girl1 from '../../assets/1.jpg';
import girl2 from '../../assets/2.jpg';
import CarouselControls from '../shared/CarouselControls';

const testimonials = [
  {
    quote:
      'Auguе Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget',
    name: 'Jody Andrews',
    role: 'Project Manager',
    avatar: girl1,
  },
  {
    quote:
      'Auguе Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget',
    name: 'Jody Andrews',
    role: 'Project Manager',
    avatar: girl2,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="w-[1041px] max-w-full mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B2D]">Testimonials</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-1 w-16 bg-[#E94141] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {testimonials.map((t, i) => (
            <div key={i} className="pb-12">
              <TestimonialCard {...t} cardClass="w-[578px] h-[402px] max-w-full mx-auto" />
            </div>
          ))}
        </div>

        {/* controls */}
        <div className="mt-8">
          <CarouselControls total={4} activeIndex={1} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


