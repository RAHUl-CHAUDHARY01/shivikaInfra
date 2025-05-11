import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import jpgreens from '../assets/jpgreens.jpg';
import godrejgolf from '../assets/godrejgolf.jpg';
import jpaman from '../assets/jpaman.jpeg';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import image2 from '../assets/image2.jpg';
import logo from '../assets/logo2.png';
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
      bgImage: image2
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and add resize listener
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <section className="relative overflow-hidden w-full" style={{
      height: isMobile ? '60vh' : '95vh',
      minHeight: isMobile ? '400px' : '600px',
    }}>
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
  className="absolute inset-0"
  style={{ 
    background: `linear-gradient(to bottom, 
      rgba(0,0,0,0.7) 0%, 
      rgba(0,0,0,0.8) 50%, 
      rgba(0,0,0,0.85) 100%)`
  }}
></div>


            
            {/* Background image with subtle tint */}
            <motion.div 
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: isMobile ? 'cover' : 'cover',
                filter: 'brightness(0.30) contrast(1.1)',
                backgroundPosition: isMobile ? 'center center' : 'center center'
              }}
              initial={{ scale: 1.05, y: 0 }}
              animate={{ 
                scale: index === currentSlide ? 1 : 1.05,
                y: index === currentSlide ? (isMobile ? -5 : -10) : 0,
                transition: { duration: 6, ease: "easeOut" }
              }}
            />
            
            {/* Content with enhanced text visibility */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
              <div className="max-w-full">
                {/* Text content container with subtle backdrop */}
              <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:h-screen">
  {/* Left Side - Logo area */}
  <div className="hidden md:flex items-center justify-center h-[70vh]">
    <img src={logo} alt="Logo" className="object-contain max-h-full max-w-full px-4 mt-[-100px]" />
  </div>

  {/* Right Side - Text content */}
  <div className="col-span-2 px-6 py-10 md:py-0 md:pr-16 text-right relative">
    {/* Optional subtle backdrop for text */}
    <div className="absolute -left-3 sm:-left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-black to-transparent"></div>

    <motion.div
      initial={{ width: 0 }}
      animate={{ 
        width: index === currentSlide ? (isMobile ? '40px' : '60px') : 0,
        transition: { delay: 0.2, duration: 0.8 }
      }}
      className="h-0.5 bg-white mb-3 sm:mb-6 ml-auto"
    />

    <motion.h1 
      initial={{ y: 40, opacity: 0 }}
      animate={{ 
        y: index === currentSlide ? 0 : 40,
        opacity: index === currentSlide ? 1 : 0,
        transition: { delay: 0.4, duration: 0.9 }
      }}
      className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light mb-3 sm:mb-6"
      style={{ 
        fontFamily: 'Cormorant, serif',
        letterSpacing: '0.05em',
        fontWeight: 300,
        lineHeight: 1.2,
        color: '#ffffff',
        textShadow: '0 2px 15px rgba(0,0,0,0.8)'
      }}
    >
      {isMobile && slide.title.length > 30 
        ? slide.title.split(' ').slice(0, 5).join(' ') + '...' 
        : slide.title}
    </motion.h1>

    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ 
        y: index === currentSlide ? 0 : 30,
        opacity: index === currentSlide ? 1 : 0,
        transition: { delay: 0.6, duration: 0.9 }
      }}
      className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-10 max-w-full sm:max-w-xl md:max-w-2xl ml-auto"
      style={{ 
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 300,
        letterSpacing: '0.04em',
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.9)',
        textShadow: '0 2px 8px rgba(0,0,0,0.6)'
      }}
    >
      {isMobile && slide.subtitle.length > 60
        ? slide.subtitle.slice(0, 60) + '...'
        : slide.subtitle}
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
        className="group relative inline-flex items-center justify-end"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          letterSpacing: '0.1em'
        }}
      >
        <span className="absolute inset-0 border-b border-white/50 z-0"></span>
        <span className="relative z-10 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-white group-hover:text-white/80 transition-all duration-300">
          {slide.cta}
        </span>
        <span className="relative z-10 w-0 h-0 ml-1 sm:ml-2 border-t-[4px] sm:border-t-[5px] border-t-transparent border-b-[4px] sm:border-b-[5px] border-b-transparent border-l-[4px] sm:border-l-[5px] border-l-white group-hover:translate-x-1 transition-transform duration-300"></span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </motion.div>
  </div>
</div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ultra-modern navigation - desktop/tablet */}
      <div className="hidden sm:flex absolute bottom-8 right-6 md:right-10 z-20 items-center space-x-4 md:space-x-8">
        {/* Slide counter */}
        <div className="text-white font-light flex items-center">
          <span className="text-xl md:text-3xl font-thin" style={{ color: theme.roseGoldLight }}>
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="mx-1 md:mx-2 text-xs md:text-sm text-white/50">—</span>
          <span className="text-xs md:text-sm text-white/70">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>
        
        {/* Navigation controls */}
        <div className="flex items-center">
          <button 
            onClick={toggleAutoPlay}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 mr-1 md:mr-2"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? <FaPause size={8} className="md:text-xs" /> : <FaPlay size={8} className="md:text-xs" />}
          </button>
          
          <button 
            onClick={prevSlide}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={10} className="md:text-xs" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50 ml-1 md:ml-2"
            aria-label="Next slide"
          >
            <FaChevronRight size={10} className="md:text-xs" />
          </button>
        </div>
      </div>
      
      {/* Mobile navigation controls */}
      <div className="sm:hidden absolute bottom-4 right-4 z-20 flex items-center space-x-3">
        <button 
          onClick={toggleAutoPlay}
          className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <FaPause size={8} /> : <FaPlay size={8} />}
        </button>
        
        <button 
          onClick={prevSlide}
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={8} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50"
          aria-label="Next slide"
        >
          <FaChevronRight size={8} />
        </button>
      </div>
      
      {/* Elegant slide indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-10 z-20 flex items-center">
        <div className="flex space-x-2 sm:space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative overflow-hidden focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="w-8 sm:w-16 h-px bg-white/30 group-hover:bg-white/50 transition-all duration-300">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: currentSlide === index ? "100%" : "0%",
                    transition: { duration: 0.4 }
                  }}
                />
              </div>
              <span className="absolute -bottom-5 left-0 text-[10px] sm:text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile slide counter */}
      <div className="sm:hidden absolute top-4 right-4 z-20 flex items-center">
        <span className="text-lg font-thin text-white/80">
          {String(currentSlide + 1).padStart(2, '0')}
          <span className="mx-1 text-xs text-white/40">—</span>
          <span className="text-xs text-white/60">{String(slides.length).padStart(2, '0')}</span>
        </span>
      </div>
    </section>
  );
};

export default Hero;