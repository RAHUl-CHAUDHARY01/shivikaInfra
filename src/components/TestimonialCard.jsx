import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import React from 'react';
const TestimonialCard = ({ testimonial, featured = false }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg p-6 shadow-md ${featured ? 'border-2 border-[#e0bfb8]' : ''}`}
    >
      <div className="flex items-start mb-4">
        <FaQuoteLeft className="text-[#e0bfb8] mr-2 mt-1 flex-shrink-0" />
        <p className="text-gray-600 italic">{testimonial.content}</p>
      </div>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-black">{testimonial.name}</h4>
          <p className="text-sm text-[#e0bfb8]">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;