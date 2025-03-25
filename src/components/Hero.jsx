import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import bg from '../assets/bg.png';
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
      bgColor: img1
    },
    {
      title: "Expert Compliance Solutions",
      subtitle: "Streamlined approvals for maps, certificates, NOCs and more",
      cta: "Our Services",
      bgColor: img2
    },
    {
      title: "Trusted Real Estate Partners",
      subtitle: "Industrial spaces, group housing, plotting and farmhouse solutions",
      cta: "Explore Properties",
      bgColor: img3
    },
    {
      title: "Authority Approved Consultants",
      subtitle: "Official recognition from Noida, Greater Noida & Yamuna Authorities",
      cta: "Learn More",
      bgColor: img4
    },
    {
      title: "End-to-End Allotment Assistance",
      subtitle: "Complete guidance through the allotment process and formalities",
      cta: "Contact Us",
      bgColor: img2
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative h-[80vh] min-h-[500px] text-white bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${bg})` }}
    >
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#e0bfb8] w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full z-10 hover:bg-[#e0bfb8] hover:text-black transition"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full z-10 hover:bg-[#e0bfb8] hover:text-black transition"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Slides */}
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              transition: { duration: 2 }
            }}
            className={`absolute inset-0 flex items-center justify-center text-center`} style={{backgroundImage:`url(${slide.bgColor})`}}
          >
            <div className="container mx-auto px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 20,
                  transition: { delay: 0.3 }
                }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 20,
                  transition: { delay: 0.5 }
                }}
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 20,
                  transition: { delay: 0.3 }
                }}
              >
                <a 
                  href={index === 0 ? "/contact" : 
                       index === 1 ? "/services" : 
                       index === 2 ? "/services" : 
                       index === 3 ? "/about" : "/contact"}
                  className="bg-[#e0bfb8] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#d4a59a] transition inline-block"
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