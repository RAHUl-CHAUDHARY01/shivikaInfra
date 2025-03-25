import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Color Palette
const COLORS = {
  rosegold: '#B76E79',
  black: '#1A1A1A',
  white: '#FFFFFF',
  lightRosegold: '#D8A6B1',
  darkRosegold: '#9C5460'
};

// Navigation Component
const Navigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      style={{ backgroundColor: COLORS.white, borderBottom: `2px solid ${COLORS.rosegold}` }}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/100/50" 
            alt="Shivika Infra Solutions Logo" 
            className="h-12 mr-4"
          />
          <h1 
            className="text-2xl font-bold"
            style={{ color: COLORS.rosegold }}
          >
            Shivika Infra Solutions
          </h1>
        </div>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeTab === item.id 
                  ? 'bg-rosegold text-white' 
                  : 'text-black hover:bg-rosegold/10'
              }`}
              style={{
                backgroundColor: activeTab === item.id ? COLORS.rosegold : 'transparent',
                color: activeTab === item.id ? COLORS.white : COLORS.black
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center text-center p-8"
      style={{ 
        backgroundColor: COLORS.white,
        backgroundImage: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.lightRosegold} 100%)` 
      }}
    >
      <div className="max-w-4xl">
        <h1 
          className="text-5xl font-bold mb-6"
          style={{ color: COLORS.black }}
        >
          Transforming Infrastructure Solutions
        </h1>
        <p 
          className="text-xl mb-8"
          style={{ color: COLORS.black }}
        >
          Your Trusted Partner for Real Estate and Compliance Services
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            className="px-6 py-3 text-lg"
            style={{ 
              backgroundColor: COLORS.rosegold, 
              color: COLORS.white,
              ':hover': { backgroundColor: COLORS.darkRosegold }
            }}
          >
            Our Services
          </Button>
          <Button 
            variant="outline"
            className="px-6 py-3 text-lg"
            style={{ 
              borderColor: COLORS.rosegold, 
              color: COLORS.rosegold 
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

// Services Component
const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Compliance Services',
      services: [
        'Map Approvals',
        'Completion & Functional Certificates',
        'Property Transfers',
        'NOCs (No Objection Certificates)',
        'Pollution Certificates',
        'Rent Permissions'
      ]
    },
    {
      title: 'Real Estate Services',
      services: [
        'Industrial Spaces',
        'Buying, Selling, and Leasing Properties',
        'Group Housing Projects',
        'Plotting',
        'Farmhouses',
        'Luxury Landscaping'
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen p-16"
      style={{ backgroundColor: COLORS.white }}
    >
      <h2 
        className="text-4xl font-bold text-center mb-12"
        style={{ color: COLORS.rosegold }}
      >
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {serviceCategories.map((category, index) => (
          <Card 
            key={index}
            className="shadow-lg"
            style={{ 
              backgroundColor: COLORS.lightRosegold + '20',
              borderColor: COLORS.rosegold
            }}
          >
            <CardHeader>
              <CardTitle 
                className="text-2xl font-semibold"
                style={{ color: COLORS.rosegold }}
              >
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.services.map((service, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center"
                    style={{ color: COLORS.black }}
                  >
                    <span 
                      className="mr-2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: COLORS.rosegold }}
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ 
        backgroundColor: COLORS.white,
        backgroundImage: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.lightRosegold} 100%)` 
      }}
    >
      <Card 
        className="w-full max-w-md p-8 shadow-2xl"
        style={{ backgroundColor: COLORS.white }}
      >
        <h2 
          className="text-3xl font-bold text-center mb-8"
          style={{ color: COLORS.rosegold }}
        >
          Contact Shivika Infra Solutions
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span 
              className="mr-4 p-2 rounded-full"
              style={{ backgroundColor: COLORS.rosegold + '20' }}
            >
              📞
            </span>
            <div>
              <p 
                className="font-semibold"
                style={{ color: COLORS.black }}
              >
                Phone Numbers
              </p>
              <p style={{ color: COLORS.rosegold }}>
                +91 989 93 600 01
                <br />
                +91 700 27 700 37
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span 
              className="mr-4 p-2 rounded-full"
              style={{ backgroundColor: COLORS.rosegold + '20' }}
            >
              📍
            </span>
            <div>
              <p 
                className="font-semibold"
                style={{ color: COLORS.black }}
              >
                Authorized By
              </p>
              <p style={{ color: COLORS.rosegold }}>
                Greater Noida Authority
                <br />
                Noida Authority
                <br />
                Yamuna Authority
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Main App Component
const ShivikaInfraSite = () => {
  return (
    <div 
      className="bg-white"
      style={{ backgroundColor: COLORS.white }}
    >
      <Navigation />
      <main className="pt-20">
        <HomePage />
        <ServicesPage />
        <ContactPage />
      </main>
      <footer 
        className="p-4 text-center"
        style={{ 
          backgroundColor: COLORS.rosegold, 
          color: COLORS.white 
        }}
      >
        © 2024 Shivika Infra Solutions. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ShivikaInfraSite;