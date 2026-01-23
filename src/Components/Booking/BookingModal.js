import React from "react";
import "./BookingModal.css";

export default function BookingModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="booking-overlay">
      <div className="booking-modal">

        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="modal-title">Complete Your Booking</h2>

        {/* PREVIEW */}
        <div className="room-preview">
          <img src={data.bimg || data.aimg || data.img} alt={data.title} />

          <div className="room-details">
            <h3>{data.title}</h3>
            <p className="price">{data.price} {data.price ? <span>/ night</span> : null}</p>

            <ul>
              {data.size && <li><b>Size:</b> {data.size}</li>}
              {data.capacity && <li><b>Capacity:</b> {data.capacity}</li>}
              {data.bed && <li><b>Bed:</b> {data.bed}</li>}
              {data.services && <li><b>Services:</b> {data.services}</li>}
            </ul>
          </div>
        </div>

        {/* BOOKING FORM */}
        <form className="booking-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <input type="tel" placeholder="Mobile Number" required />
            <select required>
              <option value="">Guests</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>

          <div className="input-group">
            <input type="date" required />
            <input type="date" required />
          </div>

          <textarea placeholder="Special Requests (optional)"></textarea>

          <button className="final-booking-btn" type="submit">
            Confirm & Book Now
          </button>
        </form>

      </div>
    </div>
  );
}
