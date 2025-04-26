import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';
import React from 'react';
import Portfolio from '../pages/Portfolio';
import PropertyShowcase from './Sobha';
import { propertiesData } from '../constants/propertiesData';
const PropertyDetail = () => {
  // Get property ID from URL
  const pathParts = window.location.pathname.split('/');
  const propertyId = pathParts[pathParts.length - 1];
  console.log(propertyId);
  // Get property data using ID
  const propertyData = propertiesData[propertyId];
  console.log(propertyData);
  // If property not found, redirect to home
  if (!propertyData) {
    return <Navigate to="/" />;
  }
  
  return <PropertyShowcase propertyData={propertyData} />;
};

const AnimatedRoutes = () => {
  // const location = useLocation();
  // location={location} key={location.pathname}
  return (
    <AnimatePresence mode='wait'>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/property' element={<PropertyShowcase/>}/>
        {/* <Route path="/property/:id" element={<PropertyDetail />} /> */}


        {/* property routes */}
        <Route path='/property/dlf-garden-city' element={<PropertyShowcase propertyData={propertiesData['dlf-garden-city']} />} />

        <Route path='/property/prestige-lakeside' element={<PropertyShowcase propertyData={propertiesData['prestige-lakeside']} />} />

        <Route path='/property/sobha-sector-36' element={<PropertyShowcase propertyData={propertiesData['sobha-sector-36']} />} />
        <Route path='/property/godrej-woodland' element={<PropertyShowcase propertyData={propertiesData['godrej-woodland']} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;