import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RoomDetails.css"; 

const ServiceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const service = state?.service;

  if (!service) return <h2>No Service Data Found</h2>;

  return (
    <div className="room-details">

      {/* HERO SECTION */}
      <div
        className="room-hero"
        style={{ backgroundImage: `url(${service.aimg})` }}
      >
        <div className="overlay">
          <h1>{service.title}</h1>
          <p>{service.price}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="room-content">

        {/* IMAGES */}
        <div className="room-gallery">
          <img src={service.aimg} alt="service" />
          <img src={service.bimg} alt="service" />
        </div>

        {/* INFO */}
        <div className="room-info">
          <h2>{service.type} Information</h2>

          <div className="info-grid">
            <div><b>Type</b><span>{service.type}</span></div>
            <div><b>Size</b><span>{service.size}</span></div>
            <div><b>Capacity</b><span>{service.capacity}</span></div>
            <div><b>Services</b><span>{service.services}</span></div>
          </div>

          <p className="desc">
            Perfect venue for your special moments.  
            Fully equipped with modern facilities, ambience lighting,
            and premium comfort for guests.
          </p>

          {/* BUTTONS */}
          <div className="btn-group">
            <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              ← Go Back
            </button>

            <button
              className="book-btn"
              onClick={() =>
                navigate("/booking", { state: { service } })
              }
            >
              Book / Enquiry Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;
