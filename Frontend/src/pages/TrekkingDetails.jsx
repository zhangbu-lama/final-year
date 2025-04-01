import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TrekkingDetails = () => {
  const { region } = useParams(); // Extract the region from URL
  const navigate = useNavigate(); // Hook for navigation

  // Function to check if the user is logged in (Using localStorage as an example)
  const isUserLoggedIn = () => {
    return localStorage.getItem("userToken") !== null;
  };

  // Function to handle "Book Now" button click
  const handleBooking = () => {
    if (isUserLoggedIn()) {
      navigate(`/book/${region}`); // Proceed to booking if logged in
    } else {
      alert("Please sign up or log in to book this trek!");
      navigate("/signup"); // Redirect to signup page if not logged in
    }
  };

  // Function to handle "Inquiry" button click (example: navigate to a contact page)
  const handleInquiry = () => {
    navigate("/contact");
  };

  // Function to get region-specific details
  const getRegionDetails = (region) => {
    switch (region) {
      case 'everest-region':
        return {
          name: 'Everest Region Trek',
          maxElevation: "5,545m (Everest Base Camp)",
          walkingPerDay: "5-8 hours",
          accommodation: "Hotel + Lodge",
          bestSeason: "Spring/Autumn",
          groupSize: "2-15 PAX",
          duration: "12-16 days",
          country: "Nepal",
          route: "via Lukla",
          range: "Everest Region",
          description: "Home to the world's highest peak, offering challenging and scenic treks.",
          highlights: ["Highest peak in the world", "Challenging trails", "Breathtaking views"],
          rating: 5,
          reviews: 6,
          contactPhone: "+9779801238848",
          contactEmail: "info@sevensummittreks.com",
        };
      case 'annapurna-region':
        return {
          name: 'Annapurna Region Trek',
          maxElevation: "5,416m (Thorong La Pass)",
          walkingPerDay: "4-7 hours",
          accommodation: "Hotel + Lodge",
          bestSeason: "Spring/Autumn",
          groupSize: "2-15 PAX",
          duration: "10-21 days",
          country: "Nepal",
          route: "via Pokhara",
          range: "Annapurna Region",
          description: "Diverse landscapes from subtropical forests to alpine terrain.",
          highlights: ["Famous Annapurna Circuit", "Rich biodiversity", "Incredible mountain views"],
          rating: 5,
          reviews: 6,
          contactPhone: "+9779801238848",
          contactEmail: "info@sevensummittreks.com",
        };
      case 'langtang-region':
        return {
          name: 'Langtang Valley Trek',
          maxElevation: "3,850m",
          walkingPerDay: "5-7 hours",
          accommodation: "Hotel + Lodge",
          bestSeason: "Spring/Autumn",
          groupSize: "2-15 PAX",
          duration: "11 days",
          country: "Nepal",
          route: "via Syabrubesi",
          range: "Langtang Region",
          description: "A compact and diverse trekking area north of Kathmandu, featuring glaciated valleys and rich Tamang culture.",
          highlights: ["Langtang National Park", "Tsergo Ri (5,150m)", "Tamang heritage"],
          rating: 5,
          reviews: 6,
          contactPhone: "+9779801238848",
          contactEmail: "info@sevensummittreks.com",
        };
      default:
        return {
          name: 'Unknown Region Trek',
          maxElevation: "N/A",
          walkingPerDay: "N/A",
          accommodation: "N/A",
          bestSeason: "N/A",
          groupSize: "N/A",
          duration: "N/A",
          country: "N/A",
          route: "N/A",
          range: "N/A",
          description: "No details available for this region.",
          highlights: [],
          rating: 0,
          reviews: 0,
          contactPhone: "N/A",
          contactEmail: "N/A",
        };
    }
  };

  const regionDetails = getRegionDetails(region);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 uppercase">{regionDetails.name}</h1>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section (Description and Highlights) */}
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg text-gray-600">{regionDetails.description}</p>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Highlights</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                {regionDetails.highlights.map((highlight, index) => (
                  <li key={index} className="mb-2">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section (Trek Details and Contact) */}
        <div className="md:w-1/3 bg-gray-800 text-white p-6 rounded-lg">
          {/* Trek Details */}
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 9h4v13h16V9h4L12 2zm0 2.83l6 5V20h-4v-6H10v6H6V9.83l6-5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{regionDetails.name}</h3>
              <p className="text-sm">{regionDetails.duration}</p>
              <div className="flex items-center mt-1">
                {[...Array(regionDetails.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm">{regionDetails.rating} Excellent ({regionDetails.reviews} Reviews)</span>
              </div>
            </div>
          </div>

          {/* Share Buttons (Placeholder) */}
          <div className="flex items-center mb-4">
            <span className="mr-2">Share with friends:</span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H6v-3h4V9c0-2.76 2.24-5 5-5h3v3h-3c-1.1 0-2 .9-2 2v3h5v3h-5v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Trek Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 9h4v13h16V9h4L12 2zm0 2.83l6 5V20h-4v-6H10v6H6V9.83l6-5z" />
              </svg>
              <div>
                <p className="font-semibold">Max. Elevation:</p>
                <p>{regionDetails.maxElevation}</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0012 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <div>
                <p className="font-semibold">Walking Per Day:</p>
                <p>{regionDetails.walkingPerDay}</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z" />
              </svg>
              <div>
                <p className="font-semibold">Accommodation:</p>
                <p>{regionDetails.accommodation}</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
              </svg>
              <div>
                <p className="font-semibold">Best Season:</p>
                <p>{regionDetails.bestSeason}</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <div>
                <p className="font-semibold">Group Size:</p>
                <p>{regionDetails.groupSize}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6">
            <p className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
              </svg>
              {regionDetails.contactPhone}
            </p>
            <p className="flex items-center mt-2">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {regionDetails.contactEmail}
            </p>
          </div>

          {/* Inquiry and Book Now Buttons */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handleInquiry}
              className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center justify-between hover:bg-gray-200 transition duration-300"
            >
              <span>Inquiry</span>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>
            <button
              onClick={handleBooking}
              className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center justify-between hover:bg-yellow-600 transition duration-300"
            >
              <span>Book Now</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-8 border-b border-gray-300">
        <div className="flex space-x-6">
          {["Overview", "Itinerary", "Cost Includes", "Cost Excludes", "Dates", "Gears List", "Reviews"].map((tab) => (
            <button
              key={tab}
              className="py-2 px-4 text-gray-600 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-300"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <svg className="w-8 h-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <div>
            <p className="font-semibold">Country</p>
            <p>{regionDetails.country}</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <svg className="w-8 h-8 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
          </svg>
          <div>
            <p className="font-semibold">Duration</p>
            <p>{regionDetails.duration}</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <svg className="w-8 h-8 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>
          <div>
            <p className="font-semibold">Route</p>
            <p>{regionDetails.route}</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <svg className="w-8 h-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 9h4v13h16V9h4L12 2zm0 2.83l6 5V20h-4v-6H10v6H6V9.83l6-5z" />
          </svg>
          <div>
            <p className="font-semibold">Range</p>
            <p>{regionDetails.range}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingDetails;