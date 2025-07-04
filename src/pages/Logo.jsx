import React, { useEffect, useState } from 'react';
import logo from '../assets/logo2.webp';

export default function Logo() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show logo only when scroll position is within top 100px
      setShowLogo(currentScrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:block fixed top-2 left-4 z-50 transition-opacity duration-300 ${
        showLogo ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img src={logo} alt="Logo" className="w-66 h-auto" />
    </div>
  );
}
