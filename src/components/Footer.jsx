// components/Footer.jsx
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#e0bfb8] text-xl font-bold mb-4">Shivika Infra Solutions</h3>
            <p className="mb-4">
              Approved consultancy for Greater Noida Authority, Noida Authority, and Yamuna Authority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#e0bfb8] transition"><FaFacebook size={20} /></a>
              <a href="#" className="text-white hover:text-[#e0bfb8] transition"><FaTwitter size={20} /></a>
              <a href="#" className="text-white hover:text-[#e0bfb8] transition"><FaLinkedin size={20} /></a>
              <a href="#" className="text-white hover:text-[#e0bfb8] transition"><FaInstagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#e0bfb8] transition">Home</a></li>
              <li><a href="/about" className="hover:text-[#e0bfb8] transition">About Us</a></li>
              <li><a href="/services" className="hover:text-[#e0bfb8] transition">Services</a></li>
              <li><a href="/contact" className="hover:text-[#e0bfb8] transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-[#e0bfb8] transition">Compliance Services</a></li>
              <li><a href="/services" className="hover:text-[#e0bfb8] transition">Real Estate</a></li>
              <li><a href="/services" className="hover:text-[#e0bfb8] transition">Allotment Assistance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Noida/Greater Noida Office</li>
              <li><a href="tel:+919899360001" className="hover:text-[#e0bfb8] transition">+91 989 93 600 01</a></li>
              <li><a href="mailto:info@shivikainfra.com" className="hover:text-[#e0bfb8] transition">shivikainfrasolutions001@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shivika Infra Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;