import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#d4b2a7] text-2xl font-light tracking-wide mb-4">Shivika Infra</h3>
            <p className="mb-4 text-[#f0e6e4] leading-relaxed">
              Approved consultancy for Greater Noida Authority, Noida Authority, and Yamuna Authority.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-[#b76e79] transition-all duration-300"><FaFacebook size={20} /></Link>
              <Link to="#" className="text-white hover:text-[#b76e79] transition-all duration-300"><FaTwitter size={20} /></Link>
              <Link to="#" className="text-white hover:text-[#b76e79] transition-all duration-300"><FaLinkedin size={20} /></Link>
              <Link to="https://www.instagram.com/shivikainfrasolutions001/" className="text-white hover:text-[#b76e79] transition-all duration-300"><FaInstagram size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-light tracking-wide text-[#d4b2a7] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#f0e6e4]">
              <li><Link to="/" className="hover:text-[#b76e79] transition-all duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#b76e79] transition-all duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#b76e79] transition-all duration-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#b76e79] transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-light tracking-wide text-[#d4b2a7] mb-4">Services</h4>
            <ul className="space-y-2 text-[#f0e6e4]">
              <li><Link to="/services" className="hover:text-[#b76e79] transition-all duration-300">Compliance Services</Link></li>
              <li><Link to="/services" className="hover:text-[#b76e79] transition-all duration-300">Real Estate</Link></li>
              <li><Link to="/services" className="hover:text-[#b76e79] transition-all duration-300">Allotment Assistance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-light tracking-wide text-[#d4b2a7] mb-4">Contact Info</h4>
            <ul className="space-y-2 text-[#f0e6e4]">
              <li>Noida/Greater Noida Office</li>
              <li><Link to="tel:+919899360001" className="hover:text-[#b76e79] transition-all duration-300">+91 989 93 600 01</Link></li>
              <li><Link to="mailto:shivikainfrasolutions001@gmail.com" className="hover:text-[#b76e79] transition-all duration-300">Mail us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#505050] pt-8 text-center text-[#f0e6e4]">
          <p>&copy; {new Date().getFullYear()} Shivika Infra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;