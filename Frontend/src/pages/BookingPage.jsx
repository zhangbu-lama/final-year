
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import trekImage from "../res/trek.webp";  // Make sure to replace with the actual image path

// const BookingPage = () => {
//   const { region } = useParams();  // Get the selected trekking region
//   const navigate = useNavigate();

//   // State to manage form data
//   const [formData, setFormData] = useState({
//     title: '',
//     fullName: '',
//     email: '',
//     contactNumber: '',
//     country: '',
//     tripName: '',  // Will be dynamically set based on region
//     arrivalDate: '',
//     departureDate: '',
//     howDidYouFindUs: '',
//     specialRequirements: '',
//     termsAccepted: false,
//   });

//   // State to manage form errors
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     console.log('Region from useParams:', region); // Log the region value

//     if (region === 'everest-region') {
//       setFormData((prevState) => ({
//         ...prevState,
//         tripName: '3 Passes with EBC & Lobuche Peak',
//       }));
//     } else if (region === 'annapurna-region') {
//       setFormData((prevState) => ({
//         ...prevState,
//         tripName: 'Annapurna Base Camp Trek',
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         tripName: 'Trekking Adventure', // Default value
//       }));
//     }
//   }, [region]); // Re-run effect when the region changes

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // Validate form
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.title) newErrors.title = 'Title is required';
//     if (!formData.fullName) newErrors.fullName = 'Full Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
//     if (!formData.country) newErrors.country = 'Country is required';
//     if (!formData.arrivalDate) newErrors.arrivalDate = 'Arrival Date is required';
//     if (!formData.departureDate) newErrors.departureDate = 'Departure Date is required';
//     if (!formData.howDidYouFindUs) newErrors.howDidYouFindUs = 'This field is required';
//     if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     // If validation passes, proceed with form submission (e.g., API call)
//     console.log('Form submitted:', formData);
//     alert('Form submitted successfully!');
//     handleReset(); // Reset form after submission
//   };

//   // Handle form reset
//   const handleReset = () => {
//     setFormData({
//       title: '',
//       fullName: '',
//       email: '',
//       contactNumber: '',
//       country: '',
//       tripName: '',  // Reset trip name
//       arrivalDate: '',
//       departureDate: '',
//       howDidYouFindUs: '',
//       specialRequirements: '',
//       termsAccepted: false,
//     });
//     setErrors({});
//   };

//   // Handle back navigation
//   const handleBack = () => {
//     navigate(`/trekking-details/${region}`);  // Navigate back to the specific region's trekking details page
//   };

//   return (
//     <div>
//       {/* Background Image (only above the form) */}
//       <div
//         className="w-full h-[450px] bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url(${trekImage})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>  {/* Dark overlay on top of the image */}
//       </div>
//       <div className="max-w-screen-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//         {/* Header */}
//         <div className="bg-yellow-600 text-white p-4 rounded-t-lg flex items-center">
//           <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
//           <div>
//             <h2 className="text-xl font-bold">3 Passes with EBC & Lobuche Peak</h2>
//             <p className="text-sm">
//               For people who seek adventure for a lifetime. This is the finest trek in the world that centers on the world's highest peak Mt. Everest.
//             </p>
//           </div>
//         </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit} className="p-6">
//           {/* Personal Details */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-yellow-600 mb-4">Personal Detail</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
//                 <select
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 >
//                   <option value="">Select Title</option>
//                   <option value="Mr">Mr</option>
//                   <option value="Mrs">Mrs</option>
//                   <option value="Ms">Ms</option>
//                   <option value="Dr">Dr</option>
//                 </select>
//                 {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//                 {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
//                 <input
//                   type="text"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   placeholder="Eg: (+Country Code + City Code + Phone Number)"
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//                 {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
//                 <select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 >
//                   <option value="">Select Nationality</option>
//                   <option value="Nepal">Nepal</option>
//                   <option value="USA">USA</option>
//                   <option value="UK">UK</option>
//                   <option value="India">India</option>
//                 </select>
//                 {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Trip Detail */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-yellow-600 mb-4">Trip Detail</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Trip Name *</label>
//                 <input
//                   type="text"
//                   name="tripName"
//                   value={formData.tripName}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   readOnly
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Date *</label>
//                 <input
//                   type="date"
//                   name="arrivalDate"
//                   value={formData.arrivalDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//                 {errors.arrivalDate && <p className="text-red-500 text-sm mt-1">{errors.arrivalDate}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Final Departure Date *</label>
//                 <input
//                   type="date"
//                   name="departureDate"
//                   value={formData.departureDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//                 {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">How do you find us? *</label>
//                 <select
//                   name="howDidYouFindUs"
//                   value={formData.howDidYouFindUs}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 >
//                   <option value="">- Select -</option>
//                   <option value="Google">Google</option>
//                   <option value="Friend">Friend</option>
//                   <option value="Social Media">Social Media</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 {errors.howDidYouFindUs && <p className="text-red-500 text-sm mt-1">{errors.howDidYouFindUs}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Special Requirement */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-yellow-600 mb-4">Special Requirement</h3>
//             <textarea
//               name="specialRequirements"
//               value={formData.specialRequirements}
//               onChange={handleChange}
//               placeholder="Let us know all your inquiries and we will get back to you shortly"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
//             />
//           </div>

//           {/* Terms and Conditions */}
//           <div className="mb-6">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <span className="text-sm text-gray-700">I accept terms and Conditions</span>
//             </label>
//             {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between">
//             <button
//               type="submit"
//               className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={handleReset}
//               className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
//             >
//               Reset
//             </button>
//             <button
//               type="button"
//               onClick={handleBack}
//               className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               Back
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import trekImage from "../res/trek.webp"; // Make sure the path is correct
import mountainsBg from '../res/mountains.webp'; // Import the background image

const tripDetails = {
  'everest-region': {
    name: '3 Passes with EBC & Lobuche Peak',
    description:
      'For people who seek adventure for a lifetime. This is the finest trek in the world that centers on the world\'s highest peak Mt. Everest.',
  },
  'annapurna-region': {
    name: 'Annapurna Base Camp Trek',
    description:
      'A classic trek through diverse landscapes and culture, rich mountain vistas, terraced fields, and traditional villages.',
  },
  // Add more regions here
};

const BookingPage = () => {
  const { region } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    contactNumber: '',
    country: '',
    tripName: '', // Will be dynamically set
    arrivalDate: '',
    departureDate: '',
    howDidYouFindUs: '',
    specialRequirements: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  // Set tripName based on region
  useEffect(() => {
    const currentTrip = tripDetails[region] || {
      name: 'Trekking Adventure',
      description: 'Explore the Himalayas with a custom trekking experience.',
    };

    setFormData((prev) => ({
      ...prev,
      tripName: currentTrip.name,
    }));
  }, [region]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.arrivalDate) newErrors.arrivalDate = 'Arrival Date is required';
    if (!formData.departureDate) newErrors.departureDate = 'Departure Date is required';
    if (!formData.howDidYouFindUs) newErrors.howDidYouFindUs = 'This field is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      title: '',
      fullName: '',
      email: '',
      contactNumber: '',
      country: '',
      tripName: '',
      arrivalDate: '',
      departureDate: '',
      howDidYouFindUs: '',
      specialRequirements: '',
      termsAccepted: false,
    });
    setErrors({});
  };

  const handleBack = () => {
    navigate(`/trekking-details/${region}`);
  };

  const currentTrip = tripDetails[region] || {
    name: 'Trekking Adventure',
    description: 'Explore the Himalayas with a custom trekking experience.',
  };

  return (
    <div>
      {/* Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${mountainsBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Form Container */}
      <div className="max-w-screen-md mx-auto p-6 bg-blue-300 shadow-md rounded-lg mt-10">
        {/* Dynamic Header */}
        <div className="bg-white text-black p-4 rounded-t-lg flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
          <div>
            <h2 className="text-xl font-bold">{currentTrip.name}</h2>
            <p className="text-sm">{currentTrip.description}</p>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Personal Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Personal Detail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <select name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500">
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500" />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Eg: (+Country Code + City Code + Phone Number)" className="w-full p-2 border rounded-md focus:ring-yellow-500" />
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
              </div>
              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                <select name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500">
                  <option value="">Select Nationality</option>
                  <option value="Nepal">Nepal</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="India">India</option>
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-600 mb-4">Trip Detail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trip Name *</label>
                <input type="text" name="tripName" value={formData.tripName} readOnly className="w-full p-2 border bg-gray-100 rounded-md focus:ring-yellow-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Date *</label>
                <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500" />
                {errors.arrivalDate && <p className="text-red-500 text-sm mt-1">{errors.arrivalDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Final Departure Date *</label>
                <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500" />
                {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How do you find us? *</label>
                <select name="howDidYouFindUs" value={formData.howDidYouFindUs} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-yellow-500">
                  <option value="">- Select -</option>
                  <option value="Google">Google</option>
                  <option value="Friend">Friend</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </select>
                {errors.howDidYouFindUs && <p className="text-red-500 text-sm mt-1">{errors.howDidYouFindUs}</p>}
              </div>
            </div>
          </div>

          {/* Special Requirement */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-600 mb-4">Special Requirement</h3>
            <textarea name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} placeholder="Let us know all your inquiries and we will get back to you shortly" className="w-full p-2 border rounded-md h-32 focus:ring-yellow-500" />
          </div>

          {/* Terms and Buttons */}
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" />
              <span className="text-sm text-gray-700">I accept terms and Conditions</span>
            </label>
            {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
          </div>

          <div className="flex justify-between">
            <button type="submit" className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300">Submit</button>
            <button type="button" onClick={handleReset} className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">Reset</button>
            <button type="button" onClick={handleBack} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
