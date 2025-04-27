// pages/Contact.jsx
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex flex-col" style={{fontFamily:'Spectral'}}>
      {/* Hero Section */}
      <section className="bg-[#505050] text-white py-20"   style={{
    backgroundColor: "#2e2d30",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
  }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Contact Us</h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed text-[#d4b2a7] font-light">
            Get in touch with our team for expert consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;