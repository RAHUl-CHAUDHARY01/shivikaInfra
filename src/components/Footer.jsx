import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className=" text-white " style={{fontFamily:'Spectral'}}>
       
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Contact Information */}
                  <div className="w-full">
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
          
            <section className="py-16 bg-[#f5f0e8]"  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
  }}>
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-light tracking-wide mb-8 text-center text-[#505050]">Our Location</h2>
                <div className="rounded-sm overflow-hidden shadow-md">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2681163223806!2d77.5128098!3d28.4714711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1394fec5329%3A0x437df683b47b499b!2sSHIVIKA%20INFRA%20(Real%20Estate%20%26%20Builders)!5e0!3m2!1sen!2sin!4v1742892578530!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </section>
      <div className="bg-[#2e2d30] py-16 mx-auto w-full px-4 ">
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