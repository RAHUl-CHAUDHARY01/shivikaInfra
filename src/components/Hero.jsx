import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';

const Hero = () => {
  const slides = [
    {
      title: "Building Your Vision, Securing Your Future",
      subtitle: "Approved consultancy for Greater Noida, Noida, and Yamuna Authorities",
      cta: "Get Started",
      bgImage: img1
    },
    {
      title: "Expert Compliance Solutions",
      subtitle: "Streamlined approvals for maps, certificates, NOCs and more",
      cta: "Our Services",
      bgImage: img2
    },
    {
      title: "Trusted Real Estate Partners",
      subtitle: "Industrial spaces, group housing, plotting and farmhouse solutions",
      cta: "Explore Properties",
      bgImage: img3
    },
    {
      title: "Authority Approved Consultants",
      subtitle: "Official recognition from Noida, Greater Noida & Yamuna Authorities",
      cta: "Learn More",
      bgImage: img4
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-[#e0bfb8] hover:text-black transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-[#e0bfb8] hover:text-black transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#e0bfb8] w-6' : 'bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              transition: { duration: 1.5 }
            }}
            className="absolute inset-0"
          >
            {/* Stronger dark overlay for maximum text contrast */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            ></div>
            
            {/* Content with enhanced text visibility */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: index === currentSlide ? 0 : 20,
                  opacity: index === currentSlide ? 1 : 0,
                  transition: { delay: 0.3, duration: 0.7 }
                }}
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
              >
                {slide.title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: index === currentSlide ? 0 : 20,
                  opacity: index === currentSlide ? 1 : 0,
                  transition: { delay: 0.5, duration: 0.7 }
                }}
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
              >
                {slide.subtitle}
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: index === currentSlide ? 0 : 20,
                  opacity: index === currentSlide ? 1 : 0,
                  transition: { delay: 0.7, duration: 0.7 }
                }}
              >
                <a 
                  href={index === 0 ? "/contact" : 
                       index === 1 ? "/services" : 
                       index === 2 ? "/services" : "/about"}
                  className="bg-[#e0bfb8] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#d4a59a] transition-all inline-block shadow-lg"
                >
                  {slide.cta}
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;