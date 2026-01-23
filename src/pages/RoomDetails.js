import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RoomDetails.css";

const RoomDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const room = state?.room;

  if (!room) return <h2>No Room Data Found</h2>;

  return (
    <div className="room-details">

      {/* HERO SECTION */}
      <div
        className="room-hero"
        style={{ backgroundImage: `url(${room.aimg})` }}
      >
        <div className="overlay">
          <h1>{room.title}</h1>
          <p>{room.price} <span>/ night</span></p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="room-content">

        {/* IMAGES */}
        <div className="room-gallery">
          <img src={room.aimg} alt="room" />
          <img src={room.bimg} alt="room" />
        </div>

        {/* INFO */}
        <div className="room-info">
          <h2>Room Information</h2>

          <div className="info-grid">
            <div><b>Ac</b><span>{room.Ac}</span></div>
            <div><b>Capacity</b><span>{room.capacity}</span></div>
            <div><b>Bed</b><span>{room.bed}</span></div>
            <div><b>Services</b><span>{room.services}</span></div>
          </div>

          <p className="desc">
            In-Room: Wi-Fi, TV, toiletries, courtesy trays, smart room controls, extra pillows.
            Experience unmatched luxury and elegance in our premium rooms.
            Designed for comfort, privacy, and modern living.
          </p>

          <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              ← Go Back
            </button>

          <button
            className="book-btn"
            onClick={() => navigate("/booking", { state: { room } })}
          >
            Reserve Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoomDetails;
