import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/GlassNavbar";
import Hero from "./Components/HeroCarousel";
import AboutUs from "./Components/AboutUs";
import Rooms from "./Components/Rooms";
import Footer from "./Components/Footer";

import RoomDetails from "./pages/RoomDetails";
import ServiceDetails from "./pages/ServiceDetails";
import BookingPage from "./pages/BookingPage";

function Layout() {
  const location = useLocation();

  // 👇 in pages par navbar & footer hide honge
  const hideLayout =
    location.pathname === "/room-details" ||
    location.pathname === "/service-details" ||
    location.pathname === "/booking";

  return (
    <>
      {/* NAVBAR */}
      {!hideLayout && <Navbar />}

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <AboutUs />
              <Rooms />
              <Hero />
            </>
          }
        />

        {/* ROOM DETAILS */}
        <Route path="/room-details" element={<RoomDetails />} />

        {/* SERVICE / HALL DETAILS */}
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* BOOKING PAGE */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
