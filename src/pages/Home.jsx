import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { testimonialsData } from "../constants/Testimonials";
import TestimonialCard from "../components/TestimonialCard";
import React from "react";
import { Link } from "react-router-dom";
import ServiceLocations from "../components/ServiceLocations";

const Home = () => {
const featuredServices = [
  {
    title: "UPSIDC",
    description: "End-to-end support for map approval under UPSIDC regulations.",
    category: "compliance",
    icon: "🧾"  // Represents documents and approvals
  },
  {
    title: "GNIDA",
    description: "Seamless assistance for completion and occupancy certificates from GNIDA.",
    category: "compliance",
    icon: "📑"  // Represents official certificates
  },
  {
    title: "YAMUNA",
    description: "Professional guidance for property transfer processes in Yamuna Authority zones.",
    category: "compliance",
    icon: "📬"  // Represents transfer and ownership
  }
];
  const featuredTestimonials = testimonialsData
    .filter((t) => t.featured)
    .slice(0, 2);
  
  return (
    <div className="flex flex-col font-sans">
      <Hero />

      {/* About Preview */}
      <section className="py-20 bg-[#e8e0d5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-light mb-6 text-[#a25963] tracking-wide"
              style={{ fontFamily: "Spectral", fontWeight: "400" }}
            >
              About Shivika Infra
            </h2>
            <p
              className="text-[20px] md:text-2xl text-[#333333] leading-relaxed"
              style={{ fontFamily: "Spectral", fontWeight: "300" }}
            >
              Welcome to Shivika Infra, your trusted real estate partner in
              Greater Noida and the Yamuna Expressway region. With a commitment
              to excellence, we specialize in the sale, purchase, renting, and
              construction of residential, commercial, and industrial
              properties.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/about"
              className="bg-[#a25963] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#8c4c55] transition-all duration-300 inline-block shadow-md text-lg"
              style={{ fontFamily: "Spectral", fontWeight: "400" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="py-20 bg-white"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      >
        <div
          className="container mx-auto px-4"
          style={{ fontFamily: "Spectral" }}
        >
          <h2 className="text-4xl font-light mb-14 text-center text-[#404040] tracking-wide">
            Our Key Services
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14"
            style={{ fontWeight: "300" }}
          >
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="bg-[#707070] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#555555] transition-all duration-300 inline-block shadow-md text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-[#e0ccc8]">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl mb-14 text-center text-[#404040] tracking-wide"
            style={{ fontFamily: "Spectral", fontWeight: "400" }}
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/testimonials"
              className="bg-[#a25963] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#8c4c55] transition-all duration-300 inline-block shadow-md text-lg"
              style={{ fontFamily: "Spectral", fontWeight: "300" }}
            >
              More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview
      <section className="py-20 bg-[#f7f3ee]">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl mb-14 text-center text-[#404040] tracking-wide"
            style={{ fontFamily: "Spectral", fontWeight: "400" }}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                style={{ height: "250px" }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title || `Project ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-beige bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-light" style={{ fontFamily: "Spectral" }}>
                      {project.title || `Project ${index + 1}`}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="bg-[#707070] text-white font-normal px-6 py-2 rounded-sm hover:bg-[#555555] transition-all duration-300 inline-block shadow-md text-lg"
              style={{ fontFamily: "Spectral", fontWeight: "300" }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section> */}
      <ServiceLocations/>
    </div>
  );
};

export default Home;