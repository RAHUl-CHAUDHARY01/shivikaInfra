// src/data/propertiesData.js
// This file contains all your property data

import sobhaBg from '../assets/bg.png';
import sobhaInterior from '../assets/jpaman2.jpeg';
// Import other property images as needed

export const propertiesData = {
  // Original property (marked as ongoing)
  "sobha-sector-36": {
    id: "sobha-sector-36",
    name: "SOBHA SECTOR 36",
    developer: "Sobha Realty",
    location: "Sector 36, Greater Noida",
    priceRange: "₹1.5 Cr*",
    priceNote: "Onwards",
    apartmentTypes: ["2", "3"],
    description: "Luxury Apartments",
    status: "ongoing", // Add status field
    features: [
      "2 STUNNING TOWERS",
      "SPREAD IN 3.5 ACRES",
      "SUBMIT YOUR EOI NOW"
    ],
    highlights: [
      "Spread Across 3.5 Acres Of Prime Land",
      "2 Stunning Towers",
      "Ground + 31 Floors",
      "State-of-the-art Amenities",
      "Exclusive Designs and Layouts",
      "Modern, Sustainable Living",
      "Smart Investment Opportunity",
      "Exclusive Architecture and Design",
      "Customised Luxury Apartments",
      "Prime Location in Greater Noida",
      "Excellent Connectivity"
    ],
    overview: [
      "Sobha Group is bringing its world-class residential experience to Sector 36, Greater Noida, offering luxurious 2, 3 & 4 BHK apartments. Strategically located, this premium development provides seamless connectivity to Delhi, Noida, and NCR, making it an ideal choice for homebuyers looking for convenience and sophistication.",
      "Designed with modern amenities, the project features a state-of-the-art clubhouse, gymnasium, swimming pool, landscaped gardens, jogging tracks, and children's play areas, ensuring a balanced and fulfilling lifestyle. With a strong focus on eco-friendly living, the development incorporates sustainable infrastructure and lush green spaces for a healthier and more serene environment. Additionally, residents will benefit from proximity to the best schools, hospitals, shopping malls, and entertainment hubs, offering the perfect blend of comfort and accessibility.",
      "The location adds immense value, being just 5 minutes from Yamuna Expressway, 10 minutes from Pari Chowk, and 30 minutes from Noida International Airport, ensuring seamless travel. For a limited time, homebuyers can avail of exclusive pre-launch offers, spot booking discounts, and special deals to secure their dream home at the best price."
    ],
    images: {
      exterior: sobhaBg,
      interior: sobhaInterior
    }
  },
  
  // Additional property 1 (marked as ongoing)
  "godrej-woodland": {
    id: "godrej-woodland",
    name: "GODREJ WOODLAND",
    developer: "Godrej Properties",
    location: "Sector 43, Gurugram",
    priceRange: "₹2.1 Cr*",
    priceNote: "Onwards",
    apartmentTypes: ["3", "4"],
    description: "Premium Residences",
    status: "ongoing", // Add status field
    features: [
      "4 ELEGANT TOWERS",
      "SPREAD IN 5 ACRES",
      "READY TO MOVE"
    ],
    highlights: [
      "Spread Across 5 Acres of Lush Greenery",
      "4 Elegant Towers",
      "Ground + 25 Floors",
      "Premium Clubhouse & Fitness Center",
      "Temperature Controlled Swimming Pool",
      "Landscaped Gardens & Parks",
      "Smart Home Technology",
      "Contemporary Architecture",
      "Spacious Apartments with Premium Finishes",
      "Prime Location in Gurugram",
      "Easy Access to Expressway"
    ],
    overview: [
      "Godrej Woodland offers an exclusive living experience in the heart of Gurugram. The project features spacious 3 & 4 BHK apartments designed for modern living with premium finishes and smart home technology.",
      "The development boasts world-class amenities including a state-of-the-art clubhouse, temperature-controlled swimming pool, fitness center, and landscaped gardens. The community is designed to promote an active and healthy lifestyle with dedicated spaces for sports and recreational activities.",
      "Located in Sector 43, Godrej Woodland enjoys excellent connectivity to major business districts, educational institutions, healthcare facilities, and entertainment hubs. The project is just minutes away from the Golf Course Road and provides easy access to the Delhi-Gurugram Expressway."
    ],
    images: {
      exterior: sobhaBg, // Replace with actual images
      interior: sobhaInterior // Replace with actual images
    }
  },
  
  // Additional property 2 (marked as upcoming)
  "dlf-garden-city": {
    id: "dlf-garden-city",
    name: "DLF GARDEN CITY",
    developer: "DLF Limited",
    location: "Sector 92, New Gurugram",
    priceRange: "₹1.8 Cr*",
    priceNote: "Onwards",
    apartmentTypes: ["2", "3", "4"],
    description: "Garden-themed Residences",
    status: "upcoming", // Mark as upcoming
    features: [
      "6 RESIDENTIAL TOWERS",
      "SPREAD IN 8.5 ACRES",
      "70% OPEN SPACES"
    ],
    highlights: [
      "70% Open Green Spaces",
      "6 Residential Towers",
      "Ground + 28 Floors",
      "Multi-tier Security System",
      "Resort-style Clubhouse",
      "Olympic-sized Swimming Pool",
      "Themed Gardens & Walking Trails",
      "Indoor Sports Complex",
      "Kids' Play Areas & Learning Zones",
      "Strategically Located in New Gurugram",
      "Close to Upcoming Metro Station"
    ],
    overview: [
      "DLF Garden City brings a refreshing living experience with its garden-themed residences in New Gurugram. The project offers 2, 3 & 4 BHK apartments surrounded by lush greenery and themed gardens, creating a serene environment away from the urban chaos.",
      "The development features world-class amenities including a resort-style clubhouse, Olympic-sized swimming pool, indoor sports complex, and dedicated areas for various activities. With 70% of the area dedicated to open spaces, residents can enjoy a healthy and balanced lifestyle.",
      "Located in Sector 92, New Gurugram, DLF Garden City enjoys excellent connectivity to major highways, commercial centers, educational institutions, and healthcare facilities. The upcoming metro station near the project will further enhance its accessibility."
    ],
    images: {
      exterior: sobhaBg, // Replace with actual images
      interior: sobhaInterior // Replace with actual images
    }
  },
  
  // Additional property 3 (marked as upcoming)
  "prestige-lakeside": {
    id: "prestige-lakeside",
    name: "PRESTIGE LAKESIDE",
    developer: "Prestige Group",
    location: "Whitefield, Bangalore",
    priceRange: "₹1.2 Cr*",
    priceNote: "Onwards",
    apartmentTypes: ["1", "2", "3"],
    description: "Lakefront Luxury Apartments",
    status: "upcoming", // Mark as upcoming
    features: [
      "LAKEFRONT LIVING",
      "12 RESIDENTIAL BLOCKS",
      "80+ AMENITIES"
    ],
    highlights: [
      "Scenic Lake Views",
      "12 Residential Blocks",
      "Ground + 20 Floors",
      "80+ World-class Amenities",
      "2 Clubhouses with Indoor & Outdoor Facilities",
      "Multiple Swimming Pools",
      "Amphitheater & Party Lawns",
      "Sports Facilities & Courts",
      "Children's Play Areas & Creche",
      "Prime Location in Whitefield",
      "Close to IT Parks & Business Districts"
    ],
    overview: [
      "Prestige Lakeside offers a unique lakefront living experience in the thriving neighborhood of Whitefield, Bangalore. The project features 1, 2 & 3 BHK apartments designed with contemporary architecture and premium specifications.",
      "The development boasts over 80 amenities spread across the property, including two clubhouses, multiple swimming pools, sports facilities, an amphitheater, and party lawns. The carefully planned community ensures that residents have access to everything they need for a comfortable and luxurious lifestyle.",
      "Located in Whitefield, Prestige Lakeside enjoys excellent connectivity to major IT parks, business districts, educational institutions, healthcare facilities, and shopping centers. The upcoming metro line will further enhance the connectivity of this premium residential address."
    ],
    images: {
      exterior: sobhaBg, // Replace with actual images
      interior: sobhaInterior // Replace with actual images
    }
  }
};