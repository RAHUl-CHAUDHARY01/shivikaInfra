import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../constants/services';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import logo from '../assets/logo2.webp';
import ServiceLocations from '../components/ServiceLocations';



const Services = () => {
  

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
    <div className="bg-white" style={{ fontFamily: 'Spectral' }}>
      {/* Logo Header Section */}
       <section
  className="text-white "
  style={{
    backgroundColor: "#2e2d30",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
  }}>
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <div className="text-center pt-7">
            <img
              src={logo}
              alt="Company Logo"
              className="h-48 mx-auto"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light mb-4 tracking-wide" 
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

 
 <ServiceLocations/>
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