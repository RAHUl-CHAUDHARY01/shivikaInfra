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
      <section className="py-16 bg-[#f5f0e8]"> {/* Soft beige background */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4 text-[#b76e79] tracking-wide">About Shivika Infra</h2>
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
            Welcome to Shivika Infra, your trusted real estate partner in Greater Noida and the Yamuna Expressway region. With a commitment to excellence, we specialize in the sale, purchase, renting, and construction of residential, commercial, and industrial properties. 
            </p>
          </div>
          <div className="text-center">
            <Link 
              to="/about" 
              className="bg-[#b76e79] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#a35d68] transition-all duration-300 inline-block shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center text-[#505050] tracking-wide">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/services" 
              className="bg-[#9a9a9a] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#808080] transition-all duration-300 inline-block shadow-md"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview */}
      <section className="py-16 bg-[#f0e6e4]"> {/* Light pink-beige background */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center text-[#505050] tracking-wide">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="bg-[#b76e79] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#a35d68] transition-all duration-300 inline-block shadow-md"
            >
              More Testimonials
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#404040] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-5 tracking-wide text-[#d4b2a7]">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Let's bring your project to life with expert guidance and innovative solutions.
          </p>
          <Link
            to="/contact"
            className="bg-[#b76e79] text-white font-normal px-8 py-3 rounded-sm shadow-lg 
                       hover:bg-[#a35d68] hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;