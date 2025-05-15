
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-[#f0d8d3] px-6 py-4 shadow-sm hover:shadow-lg transition"
    >
      <div className="text-[#e0bfb8] mb-4">
        <div className="w-12 h-12 bg-[#f0d8d3] rounded-full flex items-center justify-center">
          <span className="text-2xl">{service.icon}</span>
        </div>
      </div>
      <h3 className="text-xl mb-2 text-black font-[300]">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;