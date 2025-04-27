// src/components/PropertyShowcase.jsx
import React, { useState } from 'react';

// This component will be reused for all property pages
export default function PropertyShowcase({ propertyData }) {
  // For the tabs in Image 2
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className='bg-[#2e2d30]'>

    <div className="pt-12 font-sans bg-[#2e2d30]">
      {/* Header Section (Image 1) */}
    </div>
    <div className="flex flex-col md:flex-row w-full bg-[#e8e0d5]">
      <div className="w-full md:w-2/5 p-6 mt-10">
        <h1 className="text-5xl font-bold text-black" style={{fontFamily:'Spectral'}}>{propertyData.name}</h1>
        <p className="text-gray-600 text-xl  mt-1 pl-1" style={{fontFamily:'Spectral'}}>By {propertyData.developer}</p>
        
        <div className="mt-4 flex items-center">
          <span className="text-[#a25963] mr-2">●</span>
          <span className="text-gray-800">{propertyData.location}</span>
        </div>
        
        <div className="mt-6 bg-black rounded-lg py-2 px-4">
          {propertyData.features.map((feature, index) => (
            <div key={index} className={`flex items-center last:mb-0 ${index=== propertyData.features.length - 1 ? 'last:mb-0' : ' border-b-2 border-gray-700 pb-1'}`}>
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <span className="text-[#a25963]">♦</span>
              </div>
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{propertyData.apartmentTypes.join(" & ")} BHK</h2>
          <p className="text-gray-600 text-sm">{propertyData.description}</p>
        </div>
        
        <div className="mt-4 flex items-center">
          <span className="text-[#a25963] text-3xl font-bold ml-2">{propertyData.priceRange}</span>
          <span className="text-gray-600 text-sm ml-2">{propertyData.priceNote}</span>
        </div>
        
        <button className="mt-6 bg-[#a25963]  text-white font-bold py-2 px-6 rounded-full">
          ENQUIRE NOW
        </button>
      </div>
      
      <div className="w-full h-[500px] md:w-3/5 justify-center items-center my-auto mx-auto mr-4">
        <img
          src={propertyData.images.exterior}
          alt={propertyData.name}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
      {/* Overview Section (Image 2) */}
      <div className="py-12 px-8 bg-white"  style={{fontFamily:'Spectral'
          ,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b5b0bd' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
          }} >
        <h2 className="text-3xl text-[#a25963] font-bold">OVERVIEW</h2>
        
        <h3 className="text-2xl font-bold mt-4">{propertyData.name}</h3>
        
        <div className="mt-6 space-y-4">
          {propertyData.overview.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-md">{paragraph}</p>
          ))}
        </div>
        
        <button className="mt-8 bg-[#a25963] text-white font-bold py-3 px-6 rounded-full">
          DOWNLOAD BROCHURE
        </button>
      </div>
      
      {/* Highlights Section (Image 3) */}
      <div className="py-12 px-8 flex flex-col md:flex-row bg-[#e0ccc8] " style={{fontFamily:'Spectral'}}  >
        <div className="w-full md:w-1/2">
          <h2 className="text-black text-2xl font-bold mb-8">HIGHLIGHTS OF {propertyData.name}</h2>
          
          <ul className="space-y-2">
            {propertyData.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#a25963] font-bold mr-2">{index + 1}.</span>
                <span className="text-black">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center relative">
          <div className="absolute top-0 right-0 w-1/4 h-16 bg-[#a25963]"></div>
          <img 
            src={propertyData.images.interior} 
            alt="Interior View" 
            className="w-full md:w-4/5 h-auto rounded z-10" 
          />
        </div>
      </div>
    </div>
  );
}