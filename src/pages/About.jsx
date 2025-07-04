import { motion } from "framer-motion";
import React from "react";
import office from "../assets/office.webp";
import logo from "../assets/logo2.webp";
import ServiceLocations from "../components/ServiceLocations";

const About = () => {
  return (
    <div className="flex flex-col" style={{ fontFamily: "Spectral" }}>
      {/* Logo Header Section */}
       <section
  className="text-white "
  style={{
    backgroundColor: "#2e2d30",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
  }}>
        <div className="container mx-auto px-4 flex flex-col justify-center items-center ">
          <div className="text-center pt-7">
            <img
              src={logo}
              alt="Company Logo"
              className="h-60 mx-auto"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light mb-4 tracking-wide"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl max-w-2xl mx-auto text-[#d4b2a7]"
            >
              Welcome to Shivika Infra – where your vision becomes our mission.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-light mb-6 text-[#505050] tracking-wide">
                Welcome to Shivika Infra
              </h2>
              <p className="text-lg mb-4 text-[#5a5a5a] leading-relaxed">
                Your trusted real estate partner in Greater Noida and Yamuna
                expressway region. With the commitment to excellence, we
                specialize in sale,purchase,renting and construction of
                residential , commercial and industrial properties.
              </p>
              <p className="text-lg mb-4 text-[#5a5a5a] leading-relaxed">
                Our experienced team ensures high-quality developments, blending
                modern amenities with strategic locations.
                <br />
                At Shivika Infra, we don't just build structures, we create
                thriving communities and investment opportunities. Let us help
                you turn your real estate vision into reality.
                <br />
                Shivika Infra excels in real estate solutions across Greater
                Noida and Yamuna Expressway. We specialize in the sale,
                purchase, renting, and construction of residential, commercial,
                and industrial properties. With a focus on quality, innovation,
                and strategic locations, we create spaces that offer value and
                growth opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src={office}
                alt="Our office"
                className="rounded-sm shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center text-[#505050] tracking-wide">
            Our Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authority Approved",
                description: "Recognized by multiple development authorities",
                icon: "🏛️",
              },
              {
                title: "Experienced Team",
                description: "10+ years of combined industry experience",
                icon: "👥",
              },
              {
                title: "Client-Centric",
                description: "Personalized solutions for each client",
                icon: "💯",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-sm shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium mb-2 text-[#b76e79]">
                  {item.title}
                </h3>
                <p className="text-[#5a5a5a] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
<section className="py-16 bg-[#f9f9f9]">
  <div className="container mx-auto px-4">
    <div className="text-3xl font-light mb-12 text-center text-[#505050] tracking-wide">
      Our Vision
    </div>
    <div className="flex flex-col md:flex-row gap-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="md:w-full p-8  "
      >
        <p className="text-lg leading-relaxed text-[#333]">
          At Shivika, our vision extends far beyond real estate. We are not just
          building structures—we are shaping aspirations and nurturing growth.
          Our organization operates as a family where every member contributes
          toward a shared goal: the personal and professional development of
          individuals and the collective progress of our company. We believe in
          constructing not just properties, but strong relationships and
          meaningful experiences. With deep-rooted expertise in consultancy, our
          team is committed to understanding and fulfilling client needs with
          clarity, care, and excellence.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      <ServiceLocations/>
    </div>
  );
};

export default About;