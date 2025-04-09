

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TrekkingRegions } from './Trekking';

const TrekDetails = ({ title, value }) => (
  <li><strong>{title}:</strong> {value}</li>
);

const TrekkingDetails = () => {
  const { region } = useParams();
  const navigate = useNavigate();

  const trek = TrekkingRegions.find(t => t.id === region);

  const handleBooking = () => {
    navigate(`/BookingPage/${region}`);
  };

  const handleInquiry = () => {
    navigate("/contact");
  };

  if (!trek) {
    return <div className="text-center mt-12 text-red-600">Trekking region not found.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${trek.imageUrl})` }}>
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{trek.name}</h1>
            <p className="text-lg md:text-xl">
              {trek.name} trek is an adventure of a lifetime, more than just a trek — it’s the journey above the clouds.
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="flex-1">
          <p>{trek.description}</p>
          <ul className="list-none mt-4">
            <TrekDetails title="Max. Elevation" value={trek.maxElevation} />
            <TrekDetails title="Walking Per Day" value={trek.walkingPerDay} />
            <TrekDetails title="Accommodation" value={trek.accommodation} />
            <TrekDetails title="Best Season" value={trek.bestSeason} />
            <TrekDetails title="Group Size" value={trek.groupSize} />
            <TrekDetails title="Duration" value={trek.duration} />
          </ul>
        </div>

        {/* Contact & Buttons */}
        <div className="flex flex-col md:items-end">
          <p className="flex items-center mb-2">{trek.contactPhone}</p>
          <p className="flex items-center mb-4">{trek.contactEmail}</p>
          <div className="space-y-3 w-full md:w-auto">
            {/* <button
              onClick={handleInquiry}
              className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Inquiry
            </button> */}
            <button
              onClick={handleBooking}
              className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Trek Overview</h2>
        <p className="text-gray-700">{trek.overview}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Trek Overview</h2>
        <p className="text-gray-700">{trek.iteneary}</p>
        <p className="text-gray-700">{trek.iteneary1}</p>
      </div>
    </div>
  );
};

export default TrekkingDetails;
