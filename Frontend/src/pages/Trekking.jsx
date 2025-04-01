import React from 'react';
import trekImage from "../res/trek.webp";
import trek from "../res/hii.png";
import { useNavigate } from "react-router-dom";

const Trekking = () => {
  const navigate = useNavigate();

  // Define trekking regions and their paths
  const TrekkingRegions = [
    {
      name: 'Everest Region',
      packages: 7,
      imageUrl: trekImage,
      description: "Home to the world's highest peak, offering challenging and scenic treks.",
      path: "/trekking-details/everest-region" // Link to the detailed page
    },
    {
      name: 'Annapurna Region',
      packages: 5,
      imageUrl: trek,
      description: "Diverse landscapes from subtropical forests to alpine terrain.",
      path: "/trekking-details/annapurna-region" // Link to the detailed page
    },
    // Add more regions here as necessary
    {
      name: 'Langtang Region',
      packages: 7,
      imageUrl: trekImage,
      description: "Home to the world's highest peak, offering challenging and scenic treks.",
      path: "/trekking-details/Langtang-region" // Link to the detailed page
    },
    {
      name: 'Makhalu Region',
      packages: 5,
      imageUrl: trek,
      description: "Diverse landscapes from subtropical forests to alpine terrain.",
      path: "/trekking-details/Langtang-region" // Link to the detailed page
    },
    // Add more regions here as necessary
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div
        className="relative h-[490px] bg-cover bg-center flex items-end p-0.5 mt-6 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${trekImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'move'
        }}
      >
        <div className="bg-black/60 text-white p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Trekking Adventures</h1>
          <p className="text-lg">{TrekkingRegions.length} Trekking Regions</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 text-lg text-center px-6">
        <p>
          Trekking is an adventurous activity that requires walking in a wild natural environment for multiple days. 
          While hiking is often used in adventure, it especially means walking on set trails for a day or overnight only. 
          Trekking can be easy and fulfilling as well as adventurous and demanding.
        </p>
      </div>

      {/* Trekking Regions */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-10 underline">Trekking Regions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {TrekkingRegions.map((region, index) => (
            <div
              key={index}
              onClick={() => navigate(region.path)} // This makes the entire card clickable
              className="hover:shadow-xl hover:bg-blue-100 transition-shadow bg-white rounded-lg overflow-hidden cursor-pointer" // Added cursor-pointer to indicate it's clickable
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${region.imageUrl})` }}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{region.name}</h3>
                <p className="text-sm text-gray-500">{region.packages} Packages</p>
                <p className="mt-2 text-gray-700">{region.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trekking;
