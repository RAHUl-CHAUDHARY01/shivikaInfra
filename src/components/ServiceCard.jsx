// components/ServiceCard.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-[#f0d8d3] rounded-lg p-6 shadow-sm hover:shadow-lg transition"
    >
      <div className="text-[#e0bfb8] mb-4">
        {/* Replace with your icon component */}
        <div className="w-12 h-12 bg-[#f0d8d3] rounded-full flex items-center justify-center">
          <span className="text-2xl">📋</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <Link 
        to="/services" 
        className="mt-4 inline-block text-[#e0bfb8] font-medium hover:underline"
      >
        Learn more →
      </Link>
    </motion.div>
  );
};

export default ServiceCard;