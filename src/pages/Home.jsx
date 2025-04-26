import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../constants/services';
import { testimonialsData } from '../constants/Testimonials';
import TestimonialCard from '../components/TestimonialCard';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredServices = servicesData.slice(0, 3);
  const featuredTestimonials = testimonialsData.filter(t => t.featured).slice(0, 2);

  return (
    <div className="flex flex-col font-sans">
      <Hero />
      
      {/* About Preview */}
      <section className="py-20 bg-[#e8e0d5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-6xl font-light mb-6 text-[#a25963] tracking-wide">About Shivika Infra</h2>
            <p className="text-2xl text-[#333333] leading-relaxed">
              Welcome to Shivika Infra, your trusted real estate partner in Greater Noida and the Yamuna Expressway region. With a commitment to excellence, we specialize in the sale, purchase, renting, and construction of residential, commercial, and industrial properties.
            </p>
          </div>
          <div className="text-center">
            <Link 
              to="/about" 
              className="bg-[#a25963] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#8c4c55] transition-all duration-300 inline-block shadow-md text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-14 text-center text-[#404040] tracking-wide">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/services" 
              className="bg-[#707070] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#555555] transition-all duration-300 inline-block shadow-md text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview */}
      <section className="py-20 bg-[#e0ccc8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-14 text-center text-[#404040] tracking-wide">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="bg-[#a25963] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#8c4c55] transition-all duration-300 inline-block shadow-md text-lg"
            >
              More Testimonials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;