
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componets/NavBar"; // Ensure correct import path
import CoverPage from "./pages/CoverPage";
import Footer from "./pages/Footer";
import Founders from "./pages/Founders";
import Activities from "./pages/Activities";
import SignUp from "./pages/SignUp";
import Trekking from "./pages/Trekking"; // Trekking Page
import BookingPage from "./pages/BookPage";
import TrekkingDetails from "./pages/TrekkingDetails";

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Navbar remains visible across all pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="cover">
                <CoverPage />
              </section>
              <section id="activities">
                <Activities />
              </section>
              <section id="founders">
                <Founders />
              </section>
              <Footer /> {/* Footer is now inside the homepage route */}
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/book/:region" element={<BookingPage />} />
        <Route path="/trekking-details/:region" element={<TrekkingDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
