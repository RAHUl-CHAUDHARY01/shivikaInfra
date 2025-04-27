import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';

// Import the property data
import { propertiesData } from '../constants/propertiesData' // Adjust the path as needed
import PropertyShowcase from './Sobha';
import logo from '../assets/logo2.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Group properties by type (ongoing or upcoming)
  const ongoingProjects = Object.values(propertiesData).filter(property => 
    property.status === 'ongoing' || !property.status // Default to ongoing if status not specified
  );
  
  const upcomingProjects = Object.values(propertiesData).filter(property => 
    property.status === 'upcoming'
  );

  const navLinks = [
    { path: '/', name: 'Home' },
    { 
      path: '/about', 
      name: 'About',
      hasDropdown: false,
    },
    { 
      path: '/services', 
      name: 'Services',
      hasDropdown: true,
      categories: [
        {
          name: 'GNIDA',
          subcategories: ['Residential', 'Commercial', 'Industrial']
        },
        {
          name: 'Yamuna',
          subcategories: ['Architecture', 'Interior', 'Landscape']
        },
        {
          name: 'Real-Estate',
          subcategories: ['Rent', 'Sale', 'Feasibility Studies']
        },
        {
          name: 'Upcoming Project',
          subcategories: upcomingProjects.map(property => property.name),
          isPropertyList: true,
          properties: upcomingProjects
        },
        {
          name: 'Ongoing Project',
          subcategories: ongoingProjects.map(property => property.name),
          isPropertyList: true,
          properties: ongoingProjects
        }
      ]
    },
    { path: '/team', name: 'Team' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/contact', name: 'Contact' },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt className="mr-2" />, text: '+91 989 93 600 01' },
    { icon: <MdEmail className="mr-2" />, text: 'shivikainfrasolutions001@gmail.com' },
  ];

  const handleSubcategoryClick = (category, subcategory, isPropertyItem = false, propertyId = null) => {
    if (isPropertyItem && propertyId) {
      // Navigate to property detail page
      console.log(propertyId);
        const propertyData = propertiesData[propertyId];
      navigate(`/property/${propertyId}`);
     return  <PropertyShowcase propertyData={propertyData} />
    } else {
      // Navigate to contact page with subcategory as a query parameter (original behavior)
      navigate(`/contact?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
    }
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#404040]/90 py-2 shadow-md' : 'bg-transparent py-3'}`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/" className="">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" font-semibold tracking-wide bg-white bg-clip-text text-transparent whitespace-nowrap flex items-center"
              style={{fontFamily:"Jost"}}
            >
              <img src={logo} alt="Logo" className="w-10 h-10 " />
              Shivika Infra
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative group"
              >
                <Link
                  to={link.path}
                  className={`px-1 lg:px-2 py-1 text-sm lg:text-base text-white font-semibold hover:text-[#d4b2a7] transition-all duration-300 flex items-center ${location.pathname === link.path ? 'text-[#d4b2a7] tracking-wide' : ''}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <FaChevronDown className="ml-1 text-xs" />
                  )}
                </Link>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                  className="h-0.5 bg-[#b76e79] absolute bottom-0 left-0"
                />
                <div className="absolute left-0 right-0 h-0.5 bg-[#b76e79] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                {/* First level dropdown menu (Categories) */}
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-md shadow-lg py-2">
                      {link.categories.map((category, idx) => (
                        <div key={idx} className="px-4 py-2 hover:bg-gray-100 relative group/category">
                          <div className="font-medium text-gray-800 flex items-center justify-between">
                            {category.name}
                            <FaChevronRight className="text-xs text-gray-500" />
                          </div>
                          
                          {/* Second level dropdown (Subcategories) */}
                          <div className="absolute left-full top-0 w-56 opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-300">
                            <div className="bg-white rounded-md shadow-lg py-2 ml-2">
                              {category.subcategories.map((subcategory, subIdx) => {
                                // Find the matching property if this is a property list
                                const propertyItem = category.isPropertyList 
                                  ? category.properties.find(p => p.name === subcategory) 
                                  : null;
                                
                                return (
                                  <div 
                                    key={subIdx}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#b76e79] cursor-pointer"
                                    onClick={() => handleSubcategoryClick(
                                      category.name, 
                                      subcategory, 
                                      category.isPropertyList,
                                      propertyItem?.id
                                    )}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{subcategory}</span>
                                
                                    </div>
                                    {propertyItem && (
                                      <div className="text-xs text-gray-500 mt-1">
                                        {propertyItem.location}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                className="fixed inset-0 bg-[#404040] flex flex-col items-center justify-center space-y-6 overflow-y-auto pt-16 pb-8 px-4"
              >
                {navLinks.map((link, index) => (
                  <React.Fragment key={link.path}>
                    {link.hasDropdown ? (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full max-w-xs"
                      >
                        <Accordion title={link.name} isActive={location.pathname === link.path}>
                          <div className="pl-4 space-y-4 mt-2">
                            {link.categories.map((category, catIndex) => (
                              <Accordion 
                                key={catIndex}
                                title={category.name} 
                                isActive={false}
                                smaller
                              >
                                <div className="pl-4 space-y-2 mt-2">
                                  {category.subcategories.map((subcategory, subIdx) => {
                                    // Find the matching property if this is a property list
                                    const propertyItem = category.isPropertyList 
                                      ? category.properties.find(p => p.name === subcategory) 
                                      : null;
                                    
                                    return (
                                      <div 
                                        key={subIdx}
                                        className="text-white hover:text-[#d4b2a7] cursor-pointer py-1"
                                        onClick={() => handleSubcategoryClick(
                                          category.name, 
                                          subcategory, 
                                          category.isPropertyList,
                                          propertyItem?.id
                                        )}
                                      >
                                        <div className="flex items-center justify-between">
                                          <span>{subcategory}</span>
                                          {propertyItem && (
                                            <span className="text-sm text-amber-400 font-medium">
                                              {propertyItem.priceRange}
                                            </span>
                                          )}
                                        </div>
                                        {propertyItem && (
                                          <div className="text-xs text-gray-400 mt-1">
                                            {propertyItem.location}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </Accordion>
                            ))}
                          </div>
                        </Accordion>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full max-w-xs text-center"
                      >
                        <Link
                          to={link.path}
                          className={`text-xl font-light tracking-wide block py-2 ${
                            location.pathname === link.path ? 'text-[#b76e79]' : 'text-white'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
                <div className="mt-6 space-y-4 w-full max-w-xs">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-center text-base text-[#d4b2a7] break-all"
                    >
                      <span className="flex-shrink-0 mr-2">{item.icon}</span>
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

// Accordion component for mobile menu
const Accordion = ({ title, children, isActive = false, smaller = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-[#606060]">
      <button
        className={`flex items-center justify-between w-full py-2 text-left ${
          smaller ? 'text-base' : 'text-xl'
        } ${isActive ? 'text-[#b76e79]' : 'text-white'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-light tracking-wide ${smaller ? '' : ''}`}>{title}</span>
        <span className="ml-2 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : '' }}>
          <FaChevronDown className={`${smaller ? 'text-xs' : 'text-sm'}`} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;