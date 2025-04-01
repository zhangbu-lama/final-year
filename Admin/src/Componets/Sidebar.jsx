
// import React, { useContext } from 'react';
// import { AdminContext } from '../context/AdminContext';
// import { NavLink } from 'react-router-dom';


// const Sidebar = () => {
//   const { aToken } = useContext(AdminContext);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white shadow-lg">
//       {aToken && (
//         <ul className="mt-7 space-y-4">
//           {[
//             { to: "admin-dashboard", label: "Dashboard" },
          
//           ].map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-5 py-3 mx-4 rounded-lg transition-all duration-300 transform ${
//                   isActive
//                     ? 'bg-white text-blue-500 scale-105 shadow-md'
//                     : 'hover:bg-white/20 hover:scale-105'
//                 }`
//               }
//             >
            
//               <span className="font-semibold">{item.label}</span>
//             </NavLink>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white shadow-lg">
      {/* Sidebar Logo and Search */}
      <div className="bg-blue-600 text-white w-64 min-h-screen p-4">
        <div className="flex items-center mb-8">
          <img
            alt="Logo"
            className="w-10 h-10 mr-2"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/8EP7ieJXnYgPgSF3M2btUgQ8Y5A8tiYZaeVmiOlxtS0.jpg"
            width="40"
          />
          <span className="text-xl font-bold">Aqumex</span>
        </div>
        <div className="relative mb-8">
          <input
            className="w-full p-2 pl-10 rounded-full bg-blue-500 placeholder-white text-white focus:outline-none"
            placeholder="Quick Search ..."
            type="text"
          />
          <i className="fas fa-search absolute left-3 top-2.5 text-white"></i>
        </div>

        {/* Navigation Links */}
        {aToken && (
          <ul className="mt-7 space-y-4">
            {[
              { to: "/admin-dashboard", label: "Dashbaord" },
              { to: "/aShop", label: "Shop" },        // Shop link
              { to: "geography", label: "Geography" }, // Geography link
              { to: "user", label: "User" },          // User link
              // Add any additional links here
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-5 py-3 mx-4 rounded-lg transition-all duration-300 transform ${
                      isActive
                        ? 'bg-white text-blue-500 scale-105 shadow-md'
                        : 'hover:bg-white/20 hover:scale-105'
                    }`
                  }
                >
                  <span className="font-semibold">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
