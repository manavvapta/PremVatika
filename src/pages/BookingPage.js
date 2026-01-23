import React from "react";
import { useLocation } from "react-router-dom";
import BookingModal from "../Components/Booking/BookingModal";

const BookingPage = () => {
  const location = useLocation();
  const room = location.state?.room;
  const service = location.state?.service;

  // ✅ room ya service dono handle
  const data = room || service;

  return <BookingModal data={data} onClose={() => window.history.back()} />;
};

export default BookingPage;
