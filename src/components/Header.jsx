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
    { icon: <MdEmail className="mr-2" />, text: 'info@shivikainfra.com' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black py-2 shadow-xl' : 'bg-black py-3'}`}>
      {/* Removed backdrop-blur and background opacity changes */}
      <div className="container mx-auto px-4">

        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#e0bfb8] to-[#d4a59a] bg-clip-text text-transparent"
            >
              Shivika Infra Solutions
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`px-2 py-1 text-white hover:text-[#e0bfb8] transition-colors ${location.pathname === link.path ? 'text-[#e0bfb8] font-semibold' : ''}`}
                >
                  {link.name}
                </Link>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                  className="h-0.5 bg-[#e0bfb8] absolute bottom-0 left-0"
                />
                <div className="absolute left-0 right-0 h-0.5 bg-[#e0bfb8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
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
              <FaTimes size={24} className="text-[#e0bfb8]" />
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
                className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8"
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
                      className={`text-2xl ${location.pathname === link.path ? 'text-[#e0bfb8] font-bold' : 'text-white'}`}
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
                      className="flex items-center justify-center text-lg text-[#e0bfb8]"
                    >
                      {item.icon}
                      <span>{item.text}</span>
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