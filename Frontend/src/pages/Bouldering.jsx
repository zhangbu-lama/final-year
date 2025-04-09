// // import React from 'react';
// // import boulderImage from "../res/boulder.png";

// // const Bouldering = () => {
// //   return (
// //     <div>
// //       {/* Background Image with Centered Title */}
// //       <div
// //         className="w-full h-[500px] bg-cover bg-center relative"
// //         style={{ backgroundImage: `url(${boulderImage})` }}
// //       >
// //         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
// //           <h1 className="text-white text-4xl md:text-6xl font-bold">Langtang</h1>
// //         </div>
// //       </div>

// //       <div className="max-w-screen-xl mx-auto px-4 py-8">
// //         {/* Navigation Tabs */}
// //         <div className="flex justify-center space-x-4 border-b border-gray-200 mb-6">
// //           {['Overview', 'Topos', 'Map', 'Photos', 'Authors'].map((tab, index) => (
// //             <button
// //               key={index}
// //               className={`px-4 py-2 ${
// //                 tab === 'Overview'
// //                   ? 'text-yellow-600 border-b-2 border-yellow-600'
// //                   : 'text-gray-600 hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600'
// //               }`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Topos Section */}
// //         <div>
// //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Topos</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {['Sector 1-2', 'Sector 3-6', 'Sector 7-8'].map((label, index) => (
// //               <div key={index} className="relative">
// //                 <img
// //                   src={boulderImage}
// //                   alt={label}
// //                   className="w-full h-auto rounded-lg shadow-md"
// //                 />
// //                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
// //                   {label}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Bouldering;
// // src/pages/Bouldering.js
// import React from 'react';
// import boulderImage from '../res/boulder.png';
// import { Link } from 'react-router-dom';

// const Bouldering = () => {
//   return (
//     <div>
//       {/* Background Image */}
//       <div
//         className="w-full h-[500px] bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${boulderImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">Langtang</h1>
//         </div>
//       </div>

//       <div className="max-w-screen-xl mx-auto px-4 py-8">
//         {/* Navigation Tabs */}
//         <div className="flex justify-center space-x-4 border-b border-gray-200 mb-6">
//           <Link to="/" className="px-4 py-2 text-yellow-600 border-b-2 border-yellow-600">
//             Overview
//           </Link>
//           <Link to="/topos" className="px-4 py-2 text-gray-600 hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600">
//             Topos
//           </Link>
//           <Link to="/map" className="px-4 py-2 text-gray-600 hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600">
//             Map
//           </Link>
//           <Link to="/photos" className="px-4 py-2 text-gray-600 hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600">
//             Photos
//           </Link>
//           <Link to="/authors" className="px-4 py-2 text-gray-600 hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600">
//             Authors
//           </Link>
//         </div>

//         {/* Topos Section */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Topos</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((sector, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={boulderImage}
//                   alt={`Sector ${sector}`}
//                   className="w-full h-auto rounded-lg shadow-md"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
//                   Sector {sector * 2 - 1}-{sector * 2}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Bouldering;


// src/pages/Bouldering.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import boulderImage from '../res/boulder.png';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 28.1667, // Default center (Langtang region)
  lng: 85.5667,
};

const Bouldering = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    if (activeTab === 'Map') {
      const fetchPlaces = async () => {
        // try {
        //   const response = await axios.get('http://localhost:4000/api/places');
        //   setPlaces(response.data);
        // } catch (error) {
        //   console.error('Error fetching places:', error);
        // }
      };
      fetchPlaces();
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="text-center py-4">
            <p className="text-gray-600">Welcome to the Langtang region overview.</p>
          </div>
        );
      case 'Topos':
        return (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Topos</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {['Sector 1-2', 'Sector 3-6', 'Sector 7-8'].map((sector, index) => (
                <div key={index} className="relative">
                  <img
                    src={boulderImage}
                    alt={sector}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-center py-2 rounded-b-lg">
                    {sector}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'Map':
        return (
          <div className="w-full max-w-6xl mx-auto mt-8">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                {places.map((place) => (
                  <Marker
                    key={place._id}
                    position={{ lat: place.latitude, lng: place.longitude }}
                    onClick={() => setSelectedPlace(place)}
                  />
                ))}
                {selectedPlace && (
                  <InfoWindow
                    position={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude }}
                    onCloseClick={() => setSelectedPlace(null)}
                  >
                    <div className="p-2">
                      <h3 className="text-lg font-bold text-gray-800">{selectedPlace.name}</h3>
                      <p className="text-sm text-gray-600">{selectedPlace.description}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        );
      case 'Photos':
        return <div className="text-center py-4">Photos section coming soon.</div>;
      case 'Authors':
        return <div className="text-center py-4">Authors section coming soon.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${boulderImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">Langtang</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <nav className="flex justify-center space-x-4 border-b border-gray-200 mb-6">
          {[
            { label: 'Overview', active: activeTab === 'Overview' },
            { label: 'Topos', active: activeTab === 'Topos' },
            { label: 'Map', active: activeTab === 'Map' },
            { label: 'Photos', active: activeTab === 'Photos' },
            { label: 'Authors', active: activeTab === 'Authors' },
          ].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                tab.active
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-600 hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Bouldering;