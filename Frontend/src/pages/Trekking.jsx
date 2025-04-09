
import React from 'react';
import { useNavigate } from 'react-router-dom';
import trekImage from '../res/trek.webp';
import trek from '../res/hii.png';


export const TrekkingRegions = [
  {
    id: 'everest-region',
    name: 'Everest Region',
    packages: 7,
    imageUrl: trekImage,
    description: "Home to the world's highest peak, offering challenging and scenic treks.",
    overview: `The Everest Base Camp trek is one of the most iconic treks in the world, taking you deep into the heart of the Himalayas. 
    Along the way, you’ll encounter ancient Sherpa culture, charming mountain villages, and breathtaking views of snow-capped peaks like 
    Ama Dablam, Lhotse, and, of course, Everest itself. It’s a high-altitude adventure that offers both physical challenge and spiritual reward.`,
    maxElevation: "5,545m (Everest Base Camp)",
    walkingPerDay: "5-8 hours",
    accommodation: "Hotel + Lodge",
    bestSeason: "Spring/Autumn",
    groupSize: "2-15 PAX",
    duration: "12-16 days",
    rating: 5,
    reviews: 6,
    contactPhone: "+9779801238848",
    contactEmail: "info@sevensummittreks.com",



  },
  {
    id: 'annapurna-region',
    name: 'Annapurna Region',
    packages: 5,
    imageUrl: trek,
    description: 'Diverse landscapes from subtropical forests to alpine terrain.',
    overview: `The Annapurna Base Camp trek offers a unique experience through diverse landscapes. The trek takes you close to the Annapurna massif and rewards you with breathtaking views.`,
    maxElevation: "4,130m (Annapurna Base Camp)",
    walkingPerDay: "4-6 hours",
    accommodation: "Lodge",
    bestSeason: "Spring/Autumn",
    groupSize: "2-16 PAX",
    duration: "7-14 days",
    rating: 4.5,
    reviews: 8,
    contactPhone: "+9779801231234",
    contactEmail: "info@annapurnatreks.com",
  },
  {
    id: 'langtang-region',
    name: 'Langtang Region',
    packages: 7,
    imageUrl: trekImage,
    // description: 'Beautiful valley treks near the capital, rich in culture and scenery.',
    overview: ` offers beautiful valley treks rich in culture and scenic views. Trek through rhododendron forests and enjoy magnificent views.`,
    maxElevation: "4,984m (Tsergo Ri)",
    walkingPerDay: "5-7 hours",
    accommodation: "Lodge",
    bestSeason: "Spring/Autumn",
    groupSize: "2-15 PAX",
    duration: "7-12 days",
    rating: 4.8,
    reviews: 10,
    contactPhone: "+9779804567890",
    contactEmail: "info@langtangtreks.com",
    iteneary : "Day: 1 Title: 'Arrival in Kathmandu (1400m) & Transfer to the Hotel', <br></br> meals: 'Dinner', accommodation: 'Hotel;",
    iteneary1 : "Day: 1 Title: 'Arrival in Kathmandu (1400m) & Transfer to the Hotel', <br></br> meals: 'Dinner', accommodation: 'Hotel;"
    
    
   
  },
];

const Trekking = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div
        className="relative h-[490px] bg-cover bg-center flex items-end p-0.5 mt-6 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${trekImage})` }}
      >
        <div className="bg-black/60 text-white p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Trekking Adventures</h1>
          <p className="text-lg">{TrekkingRegions.length} Trekking Regions</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 text-lg text-center px-6">
        <p>
          Trekking is an adventurous activity that requires walking in a wild natural environment
          for multiple days. Trekking can be easy and fulfilling as well as adventurous and demanding.
        </p>
      </div>

      {/* Regions List */}
      <div className="pb-12">
        <h2 className="text-3xl font-bold text-center pt-12 mb-10 underline">
          Trekking Regions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-screen-xl mx-auto">
          {TrekkingRegions.map((region, index) => (
            <div
              key={index}
              onClick={() => navigate(`/trekking-details/${region.id}`)}
              className="hover:shadow-xl transition-shadow bg-white rounded-lg overflow-hidden cursor-pointer"
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



