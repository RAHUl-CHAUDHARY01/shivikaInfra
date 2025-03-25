import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';
import React from 'react';
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
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;