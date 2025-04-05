import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import jpgreens from '../assets/jpgreens.jpg';
import godrejgolf from '../assets/godrejgolf.jpg';
import jpaman from '../assets/jpaman.jpg';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';

const Hero = () => {
  // Refined color theme palette
  const theme = {
    roseGold: '#d4a08c',
    roseGoldLight: '#e0bfb8',
    beige: '#f5f0e8',
    beigeLight: '#faf7f2',
    grey: '#555555',
    greyLight: '#8a8a8a',
    greyDark: '#333333',
  };

  const slides = [
    {
      title: "Building Your Vision, Securing Your Future",
      subtitle: "Approved consultancy for Greater Noida, Noida, and Yamuna Authorities",
      cta: "Get Started",
      bgImage: hero1
    },
    {
      title: "Expert Compliance Solutions",
      subtitle: "Streamlined approvals for maps, certificates, NOCs and more",
      cta: "Our Services",
      bgImage: hero2
    },
    {
      title: "Trusted Real Estate Partners",
      subtitle: "Industrial spaces, group housing, plotting and farmhouse solutions",
      cta: "Explore Properties",
      bgImage: jpaman
    },
    {
      title: "Authority Approved Consultants",
      subtitle: "Official recognition from Noida, Greater Noida & Yamuna Authorities",
      cta: "Learn More",
      bgImage: jpgreens
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, isTransitioning]);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Elegant progress bar */}
      {isAutoPlaying && (
        <motion.div 
          className="absolute top-0 left-0 z-30 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        />
      )}

      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              transition: { duration: 1.2, ease: "easeInOut" }
            }}
            className="absolute inset-0"
          >
            {/* Enhanced darker gradient overlay for better text contrast */}
            <div 
              className="absolute inset-0 z-0"
              style={{ 
                background: `linear-gradient(to bottom, 
                  rgba(0,0,0,0.5) 0%, 
                  rgba(0,0,0,0.6) 50%,
                  rgba(0,0,0,0.7) 100%),
                  linear-gradient(120deg, 
                  rgba(0,0,0,0.7) 0%, 
                  rgba(0,0,0,0.4) 50%,
                  rgba(0,0,0,0.7) 100%)`
              }}
            />
            
            {/* Background image with subtle tint */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
                filter: 'brightness(0.85) contrast(1.1)'
              }}
              initial={{ scale: 1.05, y: 0 }}
              animate={{ 
                scale: index === currentSlide ? 1 : 1.05,
                y: index === currentSlide ? -10 : 0,
                transition: { duration: 6, ease: "easeOut" }
              }}
            />
            
            {/* Content with enhanced text visibility */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className="max-w-4xl">
                {/* Text content container with subtle backdrop */}
                <div className="relative">
                  {/* Optional subtle backdrop for text */}
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ 
                      width: index === currentSlide ? '60px' : 0,
                      transition: { delay: 0.2, duration: 0.8 }
                    }}
                    className="h-0.5 bg-white mb-6"
                  />
                  
                  <motion.h1 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ 
                      y: index === currentSlide ? 0 : 40,
                      opacity: index === currentSlide ? 1 : 0,
                      transition: { delay: 0.4, duration: 0.9 }
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-light mb-6"
                    style={{ 
                      fontFamily: 'Cormorant, serif',
                      letterSpacing: '0.05em',
                      fontWeight: 300,
                      lineHeight: 1.2,
                      color: '#ffffff',
                      textShadow: '0 2px 15px rgba(0,0,0,0.8)'
                    }}
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ 
                      y: index === currentSlide ? 0 : 30,
                      opacity: index === currentSlide ? 1 : 0,
                      transition: { delay: 0.6, duration: 0.9 }
                    }}
                    className="text-lg md:text-xl mb-10 max-w-2xl"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 300,
                      letterSpacing: '0.04em',
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.9)',
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                    }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: index === currentSlide ? 0 : 20,
                      opacity: index === currentSlide ? 1 : 0,
                      transition: { delay: 0.8, duration: 0.9 }
                    }}
                  >
                    <Link 
                      to={index === 0 ? "/contact" : 
                          index === 1 ? "/services" : 
                          index === 2 ? "/services" : "/about"}
                      className="group relative inline-flex items-center"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        letterSpacing: '0.1em'
                      }}
                    >
                      <span className="absolute inset-0 border-b border-white/50 z-0"></span>
                      <span className="relative z-10 px-4 py-2 text-white group-hover:text-white/80 transition-all duration-300">
                        {slide.cta}
                      </span>
                      <span className="relative z-10 w-0 h-0 ml-2 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-white group-hover:translate-x-1 transition-transform duration-300"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ultra-modern navigation */}
      <div className="absolute bottom-8 right-10 z-20 flex items-center space-x-8">
        {/* Slide counter */}
        <div className="text-white font-light flex items-center">
          <span className="text-3xl font-thin" style={{ color: theme.roseGoldLight }}>
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="mx-2 text-sm text-white/50">—</span>
          <span className="text-sm text-white/70">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>
        
        {/* Navigation controls */}
        <div className="flex items-center">
          <button 
            onClick={toggleAutoPlay}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 mr-2"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
          </button>
          
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={12} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50 ml-2"
            aria-label="Next slide"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
      
      {/* Elegant slide indicators */}
      <div className="absolute bottom-8 left-10 z-20 flex items-center">
        <div className="flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative overflow-hidden focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="w-16 h-px bg-white/30 group-hover:bg-white/50 transition-all duration-300">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: currentSlide === index ? "100%" : "0%",
                    transition: { duration: 0.4 }
                  }}
                />
              </div>
              <span className="absolute -bottom-5 left-0 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;