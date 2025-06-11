import React, { useEffect, useState } from "react";
import { portfolioData } from "../constants/Portfolio";
import office from "../assets/office.webp";
import logo from '../assets/logo5.webp';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(portfolioData.map((item) => item.category)),
  ];

  const section1Items = portfolioData
    .filter((item) => item.section === "section1")
    .slice(0, 8);
  const section2Items = portfolioData
    .filter((item) => item.section === "section2")
    .slice(0, 8);
  const section3Items = portfolioData
    .filter((item) => item.section === "section3")
    .slice(0, 8);

  const handleImageError = (e) => {
    e.target.src = office;
  };

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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed text-[#d4b2a7] font-light">
              Showcasing our finest work and projects in Greater Noida, Yamuna Expressway
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7E6E0" }}>
        {" "}
        {/* Light rose gold */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center text-[#505050]">
            ATS Pristine Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section1Items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: "280px" }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F5F2EE" }}>
        {" "}
        {/* Beige */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center text-[#505050]">
            JP Greens Project
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section2Items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: "280px" }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#E5E5E5" }}>
        {" "}
        {/* Light Grey */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center text-[#505050]">
            Godrej Golf Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section3Items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: "280px" }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;