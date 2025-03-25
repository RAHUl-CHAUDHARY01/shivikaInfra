import { testimonialsData } from '../constants/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import React from 'react';
const Testimonials = () => {
  const featuredTestimonials = testimonialsData.filter(t => t.featured);
  const regularTestimonials = testimonialsData.filter(t => !t.featured);
  const videoTestimonials = testimonialsData.filter(t => t.video);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-16 bg-[#f0d8d3]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Featured Testimonials</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      {videoTestimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Video Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-black rounded-lg overflow-hidden">
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
                    <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                    <p className="text-[#e0bfb8] mb-2">{testimonial.role}</p>
                    <p className="text-gray-300">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Testimonials;