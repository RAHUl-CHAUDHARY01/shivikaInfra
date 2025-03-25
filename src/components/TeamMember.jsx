import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import React from 'react';
const TeamMember = ({ member }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-black">{member.name}</h3>
        <p className="text-[#e0bfb8] mb-4">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-[#e0bfb8] transition"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {member.social.twitter && (
            <a 
              href={member.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-[#e0bfb8] transition"
            >
              <FaTwitter size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;