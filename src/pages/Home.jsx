// pages/Home.jsx
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../constants/services';
import { testimonialsData } from '../constants/Testimonials';
import TestimonialCard from '../components/TestimonialCard';
import React from 'react';
const Home = () => {
  const featuredServices = servicesData.slice(0, 3);
  const featuredTestimonials = testimonialsData.filter(t => t.featured).slice(0, 2);

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">About Shivika Infra Solutions</h2>
            <p className="text-lg text-gray-600">
              Approved consultancy for Greater Noida Authority, Noida Authority, and Yamuna Authority. 
              We specialize in compliance, real estate, and allotment services with a proven track record.
            </p>
          </div>
          <div className="text-center">
            <a 
              href="/about" 
              className="bg-[#e0bfb8] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#d4a59a] transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center">
            <a 
              href="/services" 
              className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-black-light transition inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview */}
      <section className="py-16 bg-[#f0d8d3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center">
            <a 
              href="/testimonials" 
              className="bg-[#e0bfb8] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#d4a59a] transition inline-block"
            >
              More Testimonials
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for expert guidance on your infrastructure needs.
          </p>
          <a 
            href="/contact" 
            className="bg-[#e0bfb8] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#d4a59a] transition inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;