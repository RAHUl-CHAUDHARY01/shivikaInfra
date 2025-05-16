import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../constants/services';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

import jpgreen from '../assets/jpgreens4.webp';
import godrej from '../assets/godrej.webp';
import sobha from '../assets/sobha.webp';

const Services = () => {
  const locations = [
    {
      name: "Jaypee Greens",
      image: jpgreen,
      description: "Premium services available in Jaypee Greens's thriving community"
    },
    {
      name: "Godrej",
      image: godrej,
      description: "Expert solutions for Godrej's unique infrastructure needs"
    },
    {
      name: "Sobha Realty",
      image: sobha,
      description: "Comprehensive services in Sobha Realty's prestigious developments"
    }
  ];

  const serviceCategories = [
    {
      name: "Compliance Services",
      services: servicesData.filter(s => s.category === 'compliance')
    },
    {
      name: "Real Estate Services",
      services: servicesData.filter(s => s.category === 'real-estate')
    },
    {
      name: "Allotment Assistance",
      services: servicesData.filter(s => s.category === 'allotment')
    },
    {
      name: "Liasoning Services",
      services: servicesData.filter(s => s.category === 'Liasioning')
    }
  ];

  return (
    <div className="bg-white font-sans">
      <section className=" text-white py-20"  style={{
    backgroundColor: "#2e2d30",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
  }} >
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light mb-6 tracking-wide"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#d4b2a7]"
          >
            Available across major developments in Noida and Greater Noida
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-20">
              <motion.h2 
               
                viewport={{ once: true }}
                className="text-3xl font-light mb-12 text-center text-[#505050] relative inline-block mx-auto tracking-wide"
              >
                {category.name}
                <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-px bg-[#b76e79]"></span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-light mb-12 text-center text-[#505050] relative inline-block mx-auto tracking-wide"
          >
            Our Service Locations
            <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-px bg-[#b76e79]"></span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-sm shadow-md"
              >
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide" style={{fontFamily:'Spectral'}}>{location.name}</h3>
                    <p className="text-[#d4b2a7] font-bold" style={{fontFamily:'Spectral'}}>{location.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#404040] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wide">Need Specific Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us for personalized service solutions in your area
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#b76e79] text-white font-normal px-8 py-3 rounded-sm hover:bg-[#a35d68] transition-all duration-300 shadow-md"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;