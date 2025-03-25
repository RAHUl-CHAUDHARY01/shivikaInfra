import { motion } from 'framer-motion';
import { servicesData } from '../constants/services';
import React from 'react';
import gaurcity from '../assets/gaurcity.webp';
import eledico from '../assets/eledico.webp';
import royalcity from '../assets/royalcity.webp';
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
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-28 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
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
                className="text-3xl font-bold mb-12 text-center text-black relative inline-block mx-auto"
              >
                {category.name}
                <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-1 bg-[#e0bfb8]"></span>
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
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4 text-[#e0bfb8]">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1 text-[#e0bfb8]" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-black relative inline-block mx-auto"
          >
            Our Service Locations
            <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-1 bg-[#e0bfb8]"></span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-[#e0bfb8]">{location.description}</p>
                    <button className="mt-4 bg-[#e0bfb8] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#d4a59a] transition">
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
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Specific Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for personalized service solutions in your area
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#e0bfb8] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#d4a59a] transition"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;