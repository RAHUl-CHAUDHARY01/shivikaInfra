import { testimonialsData } from "../constants/Testimonials";
import TestimonialCard from "../components/TestimonialCard";
import React from "react";
import logo from '../assets/logo2.webp';
import ServiceLocations from "../components/ServiceLocations";

const Testimonials = () => {
  const featuredTestimonials = testimonialsData.filter((t) => t.featured);
  const regularTestimonials = testimonialsData.filter((t) => !t.featured);
  // const videoTestimonials = testimonialsData.filter((t) => t.video);

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
              Testimonials
            </h1>
            <p className="text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed text-[#d4b2a7] font-light">
              What our clients say about our services
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-16 bg-[#f0e6e4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">
              Featured Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  featured
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-[#505050]">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ServiceLocations/>
    </div>
  );
};

export default Testimonials;