import { testimonialsData } from '../constants/Testimonials';
import TestimonialCard from '../components/TestimonialCard';
import React from 'react';

const Testimonials = () => {
  const featuredTestimonials = testimonialsData.filter(t => t.featured);
  const regularTestimonials = testimonialsData.filter(t => !t.featured);
  const videoTestimonials = testimonialsData.filter(t => t.video);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#505050] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Testimonials</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-[#f0e6e4]">
            What our clients say about our services
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-16 bg-[#f0e6e4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">Featured Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      {videoTestimonials.length > 0 && (
        <section className="py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">Video Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#404040] rounded-sm overflow-hidden shadow-md">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={testimonial.video} 
                      title={`Testimonial from ${testimonial.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-light tracking-wide mb-1">{testimonial.name}</h3>
                    <p className="text-[#d4b2a7] mb-2">{testimonial.role}</p>
                    <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[#404040] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-6 text-[#d4b2a7]">Ready to experience our services?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-[#f0e6e4]">
            Join our growing list of satisfied clients and transform your business today.
          </p>
          <button className="bg-[#b76e79] text-white px-8 py-3 rounded-sm shadow-md transition-all duration-300 hover:bg-[#a65c67] font-light tracking-wide">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;