// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// // console.log("BACKEND_URL:", BACKEND_URL);
// // console.log("API Request to:", `${BACKEND_URL}${endpoint}`);
// const BACKEND_URL = "http://localhost:4000";

// const Auth = () => {
//     const navigate = useNavigate();
//     const [isSignUp, setIsSignUp] = useState(true);
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validateSignUp = () => {
//         const newErrors = {};
//         if (!formData.username) newErrors.username = "Username is required";
//         if (!formData.email) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = "Email is invalid";
//         }
//         if (!formData.password) {
//             newErrors.password = "Password is required";
//         } else if (formData.password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters long";
//         }
//         if (!formData.confirmPassword) {
//             newErrors.confirmPassword = "Confirm Password is required";
//         } else if (formData.password !== formData.confirmPassword) {
//             newErrors.confirmPassword = "Passwords do not match";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };




//     const validateLogin = () => {
//         const newErrors = {};
//         if (!formData.email) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = "Email is invalid";
//         }
//         if (!formData.password) {
//             newErrors.password = "Password is required";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const isValid = isSignUp ? validateSignUp() : validateLogin();
//       if (!isValid) return;
  
//       setLoading(true);
//       const endpoint = isSignUp ? "/api/users/register" : "/api/users/login";
//       const payload = isSignUp
//           ? { name: formData.username, email: formData.email, password: formData.password }
//           : { email: formData.email, password: formData.password };
  
//       try {
//           const { data } = await axios.post(`${BACKEND_URL}${endpoint}`, payload);
//           console.log("Response:", data);
//           setLoading(false);
//           navigate("/"); 
//       } catch (error) {
//           console.error("Error:", error.response?.data || error.message);
//           setErrors({ general: error.response?.data?.message || "An error occurred" });
//           setLoading(false);
//       }
//   };
  

//     return (
//         <div className="max-w-md mx-auto p-4">
//             <h2 className="text-3xl font-bold text-center mb-6">
//                 {isSignUp ? "Sign Up" : "Login"}
//             </h2>

//             {errors.general && <p className="text-red-600 text-sm">{errors.general}</p>}

//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {isSignUp && (
//                     <div>
//                         <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                             Username
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                         />
//                         {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
//                     </div>
//                 )}

//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-md"
//                     />
//                     {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
//                 </div>

//                 <div>
//                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-md"
//                     />
//                     {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
//                 </div>

//                 {isSignUp && (
//                     <div>
//                         <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                         />
//                         {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
//                     </div>
//                 )}

//                 <div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-md"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
//                     </button>
//                 </div>
//             </form>

//             <div className="mt-4 text-center">
//                 <p className="text-sm">
//                     {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
//                     <button
//                         type="button"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         className="text-blue-500 underline"
//                     >
//                         {isSignUp ? "Login" : "Sign Up"}
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Auth;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:4000";

const Auth = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateSignUp = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = "Username is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateLogin = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = isSignUp ? validateSignUp() : validateLogin();
        if (!isValid) return;

        setLoading(true);
        setErrors({});

        try {
            const endpoint = isSignUp ? "/api/users/register" : "/api/users/login";
            const payload = isSignUp
                ? { 
                    name: formData.username.trim(),
                    email: formData.email.trim().toLowerCase(),
                    password: formData.password 
                  }
                : { 
                    email: formData.email.trim().toLowerCase(),
                    password: formData.password 
                  };

            const { data } = await axios.post(`${BACKEND_URL}${endpoint}`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Store the authentication token
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect to home page
            navigate("/");

        } catch (error) {
            console.error("Auth error:", error);
            const errorMessage = error.response?.data?.message || 
                              (isSignUp ? "Registration failed" : "Login failed");
            
            setErrors({ general: errorMessage });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">
                {isSignUp ? "Sign Up" : "Login"}
            </h2>

            {errors.general && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
                    {errors.general}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${
                                errors.username ? 'border-red-500' : 'border-gray-300'
                            }`}
                            disabled={loading}
                        />
                        {errors.username && (
                            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                        )}
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        disabled={loading}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${
                            errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        disabled={loading}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                </div>

                {isSignUp && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${
                                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                            }`}
                            disabled={loading}
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                        )}
                    </div>
                )}

                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                        loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : isSignUp ? "Sign Up" : "Login"}
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setErrors({});
                        }}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        disabled={loading}
                    >
                        {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;