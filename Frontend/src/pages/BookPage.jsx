import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const { region } = useParams(); // Get the selected trekking region
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-md mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-brand text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors mb-6"
      >
        ⬅️ Back
      </button>

      <h1 className="text-4xl font-bold mb-4">Book Your {region.replace("-", " ")} Trek</h1>
      <p className="text-lg text-gray-700">
        Ready for an adventure? Fill in your details below to book your {region.replace("-", " ")} trek.
      </p>

      {/* Booking Form */}
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-brand text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors w-full"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
