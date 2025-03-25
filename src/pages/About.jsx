import { motion } from 'framer-motion';
import React from 'react';
import office from '../assets/office.jpg'
const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Trusted Infrastructure Consultancy Since 2010
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">Our Story</h2>
              <p className="text-lg mb-4">
                Shivika Infra Solutions began as a small consultancy firm with a vision to simplify complex infrastructure processes for businesses and individuals.
              </p>
              <p className="text-lg mb-4">
                Today, we're proud to be an approved consultancy for the Greater Noida Authority, Noida Authority, and Yamuna Authority, helping hundreds of clients navigate compliance, real estate, and allotment processes.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src= {office}
                alt="Our office" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authority Approved",
                description: "Recognized by multiple development authorities",
                icon: "🏛️"
              },
              {
                title: "Experienced Team",
                description: "10+ years of combined industry experience",
                icon: "👥"
              },
              {
                title: "Client-Centric",
                description: "Personalized solutions for each client",
                icon: "💯"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-[#f0d8d3] p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-black">Our Mission</h2>
              <p className="text-lg">
                To provide reliable, efficient, and transparent infrastructure consultancy services that empower our clients to navigate complex regulatory processes with confidence.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-black text-white p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                To become the most trusted infrastructure consultancy in North India, known for our expertise, integrity, and client-focused approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;