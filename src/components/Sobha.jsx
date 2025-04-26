import React,{ useState } from 'react';
import bg from '../assets/bg.png';
import jpaman2 from '../assets/jpaman2.jpeg';
export default function PropertyShowcase() {
  // This data structure makes the component reusable for other projects
  const projectData = {
    name: "SOBHA SECTOR 36",
    developer: "Sobha Realty",
    location: "Sector 36, Greater Noida",
    priceRange: "1.5 Cr*",
    priceNote: "Onwards",
    apartmentTypes: ["2", "3"],
    description: "Luxury Apartments",
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
      exterior: bg,
      interior: jpaman2
    }
  };

  // For the tabs in Image 2
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="font-sans mt-10">
      {/* Header Section (Image 1) */}
      <div className="flex flex-col md:flex-row mt-20">
        <div className="w-full md:w-2/5 p-8 bg-white">
          <h1 className="text-4xl font-bold text-black">{projectData.name}</h1>
          <p className="text-gray-600 mt-1">By {projectData.developer}</p>
          
          <div className="mt-6 flex items-center">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{projectData.location}</span>
          </div>
          
          <div className="mt-12 bg-black rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-white uppercase text-sm">2 stunning towers</span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-white uppercase text-sm">spread in 3.5 acres</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-white uppercase text-sm">submit your eoi now</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold">{projectData.apartmentTypes.join(" & ")} BHK</h2>
            <p className="text-gray-600">{projectData.description}</p>
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-amber-600 text-3xl font-bold">₹ {projectData.priceRange}</span>
            <span className="text-gray-600 ml-2">{projectData.priceNote}</span>
          </div>
          
          <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded">
            ENQUIRE NOW
          </button>
        </div>
        
        <div className="w-full h-[500px] mr-6  md:w-3/5">
          <img 
            src={projectData.images.exterior} 
            alt={projectData.name} 
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
      
      {/* Overview Section (Image 2) */}
      <div className="py-12 px-8">
        <h2 className="text-xl text-amber-600 font-bold">OVERVIEW</h2>
        
        <h3 className="text-2xl font-bold mt-4">SOBHA SECTOR - 36, NOIDA</h3>
        
        <div className="mt-6 space-y-4">
          {projectData.overview.map((paragraph, index) => (
            <p key={index} className="text-gray-700">{paragraph}</p>
          ))}
        </div>
        
        <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full">
          DOWNLOAD BROCHURE
        </button>
      </div>
      
      {/* Highlights Section (Image 3) */}
      <div className="bg-black py-12 px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-2xl font-bold mb-8">HIGHLIGHTS OF SOBHA SECTOR 36</h2>
          
          <ul className="space-y-2">
            {projectData.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">{index + 1}.</span>
                <span className="text-white">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center relative">
          <div className="absolute top-0 right-0 w-1/4 h-16 bg-amber-600"></div>
          <img 
            src={projectData.images.interior} 
            alt="Interior View" 
            className="w-full md:w-4/5 h-auto rounded z-10" 
          />
        </div>
      </div>
    </div>
  );
}