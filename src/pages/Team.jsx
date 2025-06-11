import React from "react";
import logo from '../assets/logo5.webp';
import { Link } from 'react-router-dom';
import ServiceLocations from "../components/ServiceLocations";

const Team = () => {
  // Main leadership data
  const leadershipData = [
    {
      name: "MD",
      role: "Managing Director",
      bio: "With over 20 years of experience in infrastructure development, John leads our strategic initiatives and oversees all major projects.",
      image: "/images/john-smith.jpg",
      linkedIn: "https://linkedin.com/in/johnsmith",
    },
    {
      name: "CMD",
      role: "Chief Managing Director",
      bio: "Sarah brings extensive expertise in project management and financial planning with a proven track record of delivering complex infrastructure solutions.",
      image: "/images/sarah-johnson.jpg",
      linkedIn: "https://linkedin.com/in/sarahjohnson",
    },
  ];

  return (
    <div className="flex flex-col" style={{ fontFamily: "Spectral" }}>
      {/* Logo Header Section */}
      <section className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <div className="text-center">
            <img
              src={logo}
              alt="Company Logo"
              className="h-48 mx-auto"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
              Our Team
            </h1>
            <p className="text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed text-[#d4b2a7] font-light">
              Meet the experts behind Shivika Infra Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center text-[#505050] tracking-wide">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadershipData.map((leader, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-6 overflow-hidden border border-[#d4b2a7] w-48 h-48 shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium text-[#404040]">
                  {leader.name}
                </h3>
                <p className="text-lg text-[#d4b2a7] mb-4">{leader.role}</p>
                <p className="text-center text-gray-600 max-w-md mb-4 text-lg">
                  {leader.bio}
                </p>
                <a
                  href={leader.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#404040] hover:text-[#d4b2a7] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Career Section */}
      <section className="py-16 bg-[#fff8f3]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-8 text-[#505050] tracking-wide">
            Our Journey
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We started this organisation 21 years back with a vision to grow
            fast in the RE Market. Encouraged our MD/CEO who saw a vision in
            this industry, with his visionary mind.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From then on, building up small houses with rent, sale & purchase
            for our clients brought prosperity and growth in our vision.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Since then we just didn't deal in Greater Noida but in various parts
            of the country and extended our hands to various branches of real
            estate, for example – INDUSTRIES, LAND PARCELS, RAW HOUSES/GROUP
            HOUSES, & etc.
          </p>
          <p className="text-lg text-gray-700">
            We wish to keep our clients satisfied and growing our cliental with
            our expertise gained in all the branches of REAL ESTATE &
            CONSULTANCY.
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8 text-[#505050] tracking-wide">
            Our Talented Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Beyond our leadership, Shivika Infra Solutions is powered by a
            diverse team of 15 dedicated professionals. Our experts bring
            specialized knowledge in civil engineering, project management,
            architectural design, sustainability, and financial analysis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-[#404040] mb-2">
                Engineering Excellence
              </h3>
              <p className="text-gray-600">
                Our team includes certified engineers with expertise across
                residential, commercial, and industrial infrastructure projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-[#404040] mb-2">
                Project Management
              </h3>
              <p className="text-gray-600">
                Seasoned project managers ensure timely delivery, cost
                optimization, and quality assurance across all our initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-[#404040] mb-2">
                Design Innovation
              </h3>
              <p className="text-gray-600">
                Creative designers and architects work together to develop
                aesthetically pleasing and functionally superior solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-[#404040] mb-2">
                Technical Support
              </h3>
              <p className="text-gray-600">
                Dedicated technicians provide ongoing maintenance and technical
                guidance throughout project lifecycles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-[#404040] mb-2">
                Financial Analysis
              </h3>
              <p className="text-gray-600">
                Our financial experts ensure project viability and maximize
                returns on infrastructure investments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-[#404040] mb-2">
                Client Relations
              </h3>
              <p className="text-gray-600">
                Client-focused professionals ensure seamless communication and
                exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServiceLocations/>
    </div>
  );
};

export default Team;