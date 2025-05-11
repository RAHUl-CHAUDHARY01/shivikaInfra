import React, { useEffect, useState } from 'react';
import logo from '../assets/logo2.png';
export default function Logo() {
  const [showLogo, setShowLogo] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowLogo(false);
      } else {
        // Scrolling up
        setShowLogo(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:block fixed top-2 left-4 z-50 transition-opacity duration-300 ${
        showLogo ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img src={logo} alt="Logo" className="w-32 h-auto" />
    </div>
  );
}
