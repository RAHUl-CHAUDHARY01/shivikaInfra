import React from "react";
import logo from '../assets/logo2.webp';
import { Link } from 'react-router-dom';
import ServiceLocations from "../components/ServiceLocations";
import image from '../assets/grandmother.webp';
const Team = () => {

  return (
    <div className="flex flex-col" style={{ fontFamily: "Spectral" }}>
      {/* Logo Header Section */}
       <section
  className="text-white "
  style={{
    backgroundColor: "#2e2d30",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
  }}>
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <div className="text-center pt-7">
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
{/* With the Blessings of My Late Grandmother */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-light mb-12 text-center text-[#505050] tracking-wide">
      With the Blessings of 
    </h2>
    <div className="flex flex-col items-center">
      <div className="mb-6 overflow-hidden border border-[#d4b2a7] w-64 h-64 shadow-lg">
        <img
          src={image}
          alt="Late Grandmother"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-medium text-[#404040] mb-4">
        Smt. Kamlesh Devi
      </h3>
      <p className="text-center text-gray-600 max-w-2xl text-lg leading-relaxed">
        Everything I have achieved and continue to strive for is carried forward with the loving memory 
        and eternal blessings of my beloved mother. Her wisdom, strength, and unconditional love 
        continue to guide my path and inspire every endeavor. Though she is no longer with us in person, 
        her spirit lives on in every step of this journey, blessing all that we do with her enduring grace.
      </p>
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