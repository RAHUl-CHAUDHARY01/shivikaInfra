// pages/Contact.jsx
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#505050] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team for expert consultation
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-light tracking-wide mb-8 text-[#505050]">Our Contact Information</h2>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#b76e79] mt-1">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide mb-1 text-[#505050]">Phone</h3>
                  <p className="mb-1 text-[#5a5a5a]">
                    <Link to="tel:+919899360001" className="hover:text-[#b76e79] transition-all duration-300">+91 989 93 600 01</Link>
                  </p>
                  <p className="text-[#5a5a5a]">
                    <Link to="tel:+917002770037" className="hover:text-[#b76e79] transition-all duration-300">+91 700 27 700 37</Link>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#b76e79] mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide mb-1 text-[#505050]">Email</h3>
                  <p className="text-[#5a5a5a]">
                    <Link to="mailto:shivikainfrasolutions001@gmail.com" className="hover:text-[#b76e79] transition-all duration-300">
                    shivikainfrasolutions001@gmail.com</Link>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-[#b76e79] mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide mb-1 text-[#505050]">Address</h3>
                  <p className="text-[#5a5a5a] leading-relaxed">SHIVIKA INFRA,
                    <br/>
301, 3rd Floor, Harsha Mall,<br/> Alpha-1,Commercial Belt,
GREATER NOIDA - 201308, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-light tracking-wide mb-8 text-[#505050]">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide mb-8 text-center text-[#505050]">Our Location</h2>
          <div className="rounded-sm overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2681163223806!2d77.5128098!3d28.4714711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1394fec5329%3A0x437df683b47b499b!2sSHIVIKA%20INFRA%20(Real%20Estate%20%26%20Builders)!5e0!3m2!1sen!2sin!4v1742892578530!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#404040] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-6 text-[#d4b2a7]">Ready to discuss your project?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-[#f0e6e4]">
            Our team of experts is available to provide you with detailed information and consultation.
          </p>
          <button className="bg-[#b76e79] text-white px-8 py-3 rounded-sm shadow-md transition-all duration-300 hover:bg-[#a65c67] font-light tracking-wide">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;