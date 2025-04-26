// components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  // Site owner's WhatsApp number (include country code without +)
  const ownerWhatsAppNumber = '9899360001';
  
  // Parse query parameters when component mounts or URL changes
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const subcategory = queryParams.get('subcategory');
    
    // If both category and subcategory are present, set the subject
    if (category && subcategory) {
      setFormData(prevState => ({
        ...prevState,
        subject: `${category} - ${subcategory}`
      }));
    }
    // If only subcategory is present (backward compatibility)
    else if (queryParams.get('service')) {
      setFormData(prevState => ({
        ...prevState,
        subject: queryParams.get('service')
      }));
    }
  }, [location.search]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format the message for WhatsApp
      const whatsappMessage = `
*New Inquiry from Shivika Infra Website*
---------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
${formData.subject ? `*Subject:* ${formData.subject}\n` : ''}
*Message:*
${formData.message}
---------------------------
`;
      
      // Create WhatsApp URL with encoded message
      const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form and show success message
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <div>
      {submitted && (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 mb-6">
          <p>Thank you for your message! We've opened WhatsApp for you to send your inquiry directly to our team.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-[#505050] font-light mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-sm focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-[#505050] font-light mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-sm focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-[#505050] font-light mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-sm focus:outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-[#505050] font-light mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none"
              placeholder="What is this regarding?"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-[#505050] font-light mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-sm focus:outline-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your project or inquiry"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          className="bg-[#b76e79] hover:bg-[#a65c67] text-white py-3 px-6 rounded-sm transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;