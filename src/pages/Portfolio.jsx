import React, { useEffect, useState } from 'react';
import { portfolioData } from '../constants/Portfolio'; 
import office from '../assets/office.jpg';
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(portfolioData.map(item => item.category))];
  
  const section1Items = portfolioData.filter(item => item.section === 'section1').slice(0, 8);
  const section2Items = portfolioData.filter(item => item.section === 'section2').slice(0, 8);
  const section3Items = portfolioData.filter(item => item.section === 'section3').slice(0, 8);
  

  const handleImageError = (e) => {
    e.target.src = office;
  };

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="bg-[#505050] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4" >
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light tracking-wide">
            Showcasing our finest work and  projects in Greater Noida,Yamuna Expressway
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7E6E0' }}> {/* Light rose gold */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">
            JP Aman Projects
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Content of jp aman
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section1Items.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: '280px' }}
              >
                <img 
                  src={""} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.title}</h3>
                  <p className="text-white text-sm mt-2 opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F5F2EE' }}> {/* Beige */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">
            JP Greens Project
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
           content
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section2Items.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: '280px' }}
              >
                <img 
                  src={""} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.title}</h3>
                  <p className="text-white text-sm mt-2 opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <section className="py-16" style={{ backgroundColor: '#E5E5E5' }}> {/* Light Grey */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">
            Godrej Golf Projects
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
           content
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section3Items.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: '280px' }}
              >
                <img 
                  src={""} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.title}</h3>
                  <p className="text-white text-sm mt-2 opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;