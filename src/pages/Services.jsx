import { motion } from 'framer-motion';
import { servicesData } from '../constants/services';
import React from 'react';
import gaurcity from '../assets/gaurcity.webp';
import eledico from '../assets/eledico.webp';
import royalcity from '../assets/royalcity.webp';
import { Link } from 'react-router-dom';

const Services = () => {
  const locations = [
    {
      name: "Gaur City",
      image: gaurcity,
      description: "Premium services available in Gaur City's thriving community"
    },
    {
      name: "Eladico",
      image: eledico,
      description: "Expert solutions for Eladico's unique infrastructure needs"
    },
    {
      name: "Royal City",
      image: royalcity,
      description: "Comprehensive services in Royal City's prestigious developments"
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
      {/* Hero Section */}
      <section className="bg-[#404040] text-white py-28 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#404040]/80"></div>
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-light mb-12 text-center text-[#505050] relative inline-block mx-auto tracking-wide"
              >
                {category.name}
                <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-px bg-[#b76e79]"></span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4 text-[#b76e79]">{service.icon}</div>
                      <h3 className="text-xl font-medium mb-3 text-[#505050]">{service.title}</h3>
                      <p className="text-[#5a5a5a] mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center text-sm text-[#9a9a9a]">
                        <svg className="w-4 h-4 mr-1 text-[#b76e79]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Available in: Gaur City, Eladico, Royal City
                      </div>
                    </div>
                  </motion.div>
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
                    <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{location.name}</h3>
                    <p className="text-[#d4b2a7]">{location.description}</p>
                    <button className="mt-4 bg-[#b76e79] text-white px-4 py-2 rounded-sm text-sm font-normal hover:bg-[#a35d68] transition-all duration-300 shadow-md">
                      View Projects
                    </button>
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