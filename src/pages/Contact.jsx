// pages/Contact.jsx
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
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
              <h2 className="text-3xl font-bold mb-8 text-black">Our Contact Information</h2>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#e0bfb8] mt-1">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="mb-1">
                    <Link to="tel:+919899360001" className="hover:text-[#e0bfb8] transition">+91 989 93 600 01</Link>
                  </p>
                  <p>
                    <Link to="tel:+917002770037" className="hover:text-[#e0bfb8] transition">+91 700 27 700 37</Link>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#e0bfb8] mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p>
                    <Link to="mailto:info@shivikainfra.com" className="hover:text-[#e0bfb8] transition">
                    shivikainfrasolutions001@gmail.com</Link>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-[#e0bfb8] mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Address</h3>
                  <p>SHIVIKA INFRA SOLUTIONS,
                    <br/>
301, 3rd Floor, Harsha Mall, Opposite Metro Station,<br/> Alpha-1,
GREATER NOIDA - 201308, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-black">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2681163223806!2d77.5128098!3d28.4714711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1394fec5329%3A0x437df683b47b499b!2sSHIVIKA%20INFRA%20(Real%20Estate%20%26%20Builders)!5e0!3m2!1sen!2sin!4v1742892578530!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;