import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React from 'react';
const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <motion.form 
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-gold focus:border-rose-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-gold focus:border-rose-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="user_phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-gold focus:border-rose-gold"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-gold focus:border-rose-gold"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-gold focus:border-rose-gold"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-rose-gold text-black font-semibold px-6 py-3 rounded-md hover:bg-rose-gold-dark transition disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-md">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          Something went wrong. Please try again later.
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;