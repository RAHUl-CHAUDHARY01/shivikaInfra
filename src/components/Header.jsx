import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on desktop screens (md and up)
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      } else {
        // Always keep solid background on mobile
        setScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initialize the state based on screen size
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/team', name: 'Team' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/contact', name: 'Contact' },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt className="mr-2" />, text: '+91 989 93 600 01' },
    { icon: <MdEmail className="mr-2" />, text: 'shivikainfrasolutions001@gmail.com' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#404040]/90 py-2 shadow-md' : 'bg-transparent py-3'}`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-light tracking-wide bg-gradient-to-r from-[#d4b2a7] to-[#b76e79] bg-clip-text text-transparent"
            >
              Shivika Infra
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`px-2 py-1 text-white hover:text-[#d4b2a7] transition-all duration-300 ${location.pathname === link.path ? 'text-[#d4b2a7] font-light tracking-wide' : 'font-light'}`}
                >
                  {link.name}
                </Link>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                  className="h-0.5 bg-[#b76e79] absolute bottom-0 left-0"
                />
                <div className="absolute left-0 right-0 h-0.5 bg-[#b76e79] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes size={24} className="text-[#d4b2a7]" />
            ) : (
              <FaBars size={24} />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="fixed inset-0 bg-[#404040] flex flex-col items-center justify-center space-y-8"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-light tracking-wide ${location.pathname === link.path ? 'text-[#b76e79]' : 'text-white'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-8 space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-center text-lg text-[#d4b2a7]"
                    >
                      {item.icon}
                      <span className="font-light">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;