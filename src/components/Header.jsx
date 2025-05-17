import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaChevronRight, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import React from 'react';

import { propertiesData } from '../constants/propertiesData';
import PropertyShowcase from './Sobha';
import logo from '../assets/logo2.webp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 30); // Logo appears after scrolling 30px
      } else {
        setScrolled(true); // Always show on mobile
        setIsAtTop(window.scrollY <= 100); // Check if at hero section (top of page)
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ongoingProjects = Object.values(propertiesData).filter(property =>
    property.status === 'ongoing' || !property.status
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
        { name: 'GNIDA', subcategories: ['Compliance', 'Liasioning', 'Allotment'] },
        { name: 'Yamuna', subcategories: ['Map Approvals', 'NOCs', 'Pollution Certificate'] },
        { name: 'Real-Estate', subcategories: ['Land Plotting', 'Property Transactions', 'Group Housing'] },
      ]
    },
    { path: '/team', name: 'Team' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/portfolio', name: 'Portfolio', hasDropdown: true, categories: [{
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
        }]},
    { path: '/contact', name: 'Contact' },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt className="mr-2" />, text: '+91 989 93 600 01' },
    { icon: <MdEmail className="mr-2" />, text: 'shivikainfrasolutions001@gmail.com' },
    { icon: <MdLocationOn className="mr-2" />, text: 'Greater Noida, Uttar Pradesh' },
    { icon: <FaInstagram className="mr-2" />, text: '@shivika_infra' },
  ];

  const handleSubcategoryClick = (category, subcategory, isPropertyItem = false, propertyId = null) => {
    if (isPropertyItem && propertyId) {
      const propertyData = propertiesData[propertyId];
      navigate(`/property/${propertyId}`);
      setIsOpen(false);
      return <PropertyShowcase propertyData={propertyData} />
    } else {
      navigate(`/contact?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
      setIsOpen(false);
    }
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const getHeaderHeight = () => {
    if (window.innerWidth >= 768) {
      return scrolled ? 'py-1' : 'py-2';
    } else {
      return isAtTop ? 'py-2' : 'py-1';
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-transparent md:bg-[#404040]/90 shadow-md' : 'bg-transparent'} ${getHeaderHeight()}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between md:justify-start items-center">
          
          {/* Logo - Only visible on mobile when at hero section */}
          <Link to="/" className="flex-grow md:hidden">
            {isAtTop && location.pathname === '/' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="font-semibold tracking-wide bg-white bg-clip-text text-transparent whitespace-nowrap flex items-center"
                style={{ fontFamily: "Jost" }}
              >
                <img src={logo} alt="Logo" className="w-24 h-auto" />
              </motion.div>
            )}
          </Link>

          {/* Desktop Nav - Left Aligned, No Logo */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-8 ml-0">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`px-1 lg:px-2 py-1 text-sm lg:text-base text-white font-semibold hover:text-[#d4b2a7] transition-all duration-300 flex items-center ${location.pathname === link.path ? 'text-[#d4b2a7] tracking-wide' : ''}`}
                >
                  {link.name}
                  {link.hasDropdown && <FaChevronDown className="ml-1 text-xs" />}
                </Link>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                  className="h-0.5 bg-[#b76e79] absolute bottom-0 left-0"
                />
                <div className="absolute left-0 right-0 h-0.5 bg-[#b76e79] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-md shadow-lg py-2">
                      {link.categories.map((category, idx) => (
                        <div key={idx} className="px-4 py-2 hover:bg-gray-100 relative group/category">
                          <div className="font-medium text-gray-800 flex items-center justify-between">
                            {category.name}
                            <FaChevronRight className="text-xs text-gray-500" />
                          </div>
                          <div className="absolute left-full top-0 w-56 opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-300">
                            <div className="bg-white rounded-md shadow-lg py-2 ml-2">
                              {category.subcategories.map((subcategory, subIdx) => {
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
              <FaTimes size={22} className="text-[#d4b2a7]" />
            ) : (
              <div className='flex items-center text-black'>
                <FaBars size={22} />
              </div>
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
                className="fixed inset-0 bg-[#404040] flex flex-col justify-between overflow-y-auto"
              >
                {/* Navigation Links Section */}
                <div className="pt-16 px-4 flex-grow overflow-y-auto">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <React.Fragment key={link.path}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="w-full"
                        >
                          <div className="flex items-center justify-between border-b border-[#505050]">
                            <button
                              className={`text-base py-2 text-left flex-grow ${location.pathname === link.path ? 'text-[#b76e79]' : 'text-white'}`}
                              onClick={() => handleNavLinkClick(link.path)}
                            >
                              <span className="font-medium tracking-wide">{link.name}</span>
                            </button>
                            
                            {link.hasDropdown && (
                              <button
                                className="p-2 text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  document.getElementById(`accordion-${index}`).click();
                                }}
                              >
                                <FaChevronDown className="text-xs" />
                              </button>
                            )}
                          </div>
                          
                          {link.hasDropdown && (
                            <Accordion id={`accordion-${index}`} isActive={location.pathname === link.path}>
                              <div className="pl-4 space-y-2 mt-1 mb-2">
                                {link.categories.map((category, catIndex) => (
                                  <Accordion key={catIndex} title={category.name} isActive={false} smaller>
                                    <div className="pl-4 space-y-1 mt-1 mb-1">
                                      {category.subcategories.map((subcategory, subIdx) => {
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
                                              <span className="text-sm">{subcategory}</span>
                                              {propertyItem && (
                                                <span className="text-xs text-amber-400 font-medium">
                                                  {propertyItem.priceRange}
                                                </span>
                                              )}
                                            </div>
                                            {propertyItem && (
                                              <div className="text-xs text-gray-400">
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
                          )}
                        </motion.div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                
                {/* Footer Contact Information */}
                <div className="px-4 py-6 bg-[#353535]">
                  <h3 className="text-[#d4b2a7] font-medium text-sm mb-3 border-b border-[#505050] pb-1">Contact Information</h3>
                  <div className="space-y-2">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center text-xs text-white"
                      >
                        <span className="flex-shrink-0 text-[#d4b2a7]">{item.icon}</span>
                        <span className="ml-2 break-all">{item.text}</span>
                      </motion.div>
                    ))}
                    
                    {/* Schedule Meeting Button */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-3 pt-2 border-t border-[#505050]"
                    >
                      <button 
                        className="w-full bg-[#b76e79] hover:bg-[#a05c66] text-white font-medium py-2 px-4 rounded-sm text-sm transition-colors"
                        onClick={() => {
                          handleNavLinkClick('/contact?meeting=true');
                        }}
                      >
                        Schedule a Meeting
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

const Accordion = ({ id, title, children, isActive = false, smaller = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={smaller ? "border-b border-[#505050]" : ""}>
      {title && (
        <button
          id={id}
          className={`flex items-center justify-between w-full py-1.5 text-left ${smaller ? 'text-sm' : 'text-base'} ${isActive ? 'text-[#b76e79]' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`font-medium tracking-wide`}>{title}</span>
          <span className="ml-2 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : '' }}>
            <FaChevronDown className={`${smaller ? 'text-xs' : 'text-xs'}`} />
          </span>
        </button>
      )}
      <AnimatePresence>
        {(isOpen || !title) && (
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