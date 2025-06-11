import React from 'react'
import jpgreen from '../assets/jpgreens4.webp';
import godrej from '../assets/godrej.webp';
import sobha from '../assets/sobha.webp';
import { motion } from 'framer-motion';
function ServiceLocations() {

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



  return (
    <div>
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
    </div>
  )
}

export default ServiceLocations
