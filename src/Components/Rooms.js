import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./rooms.css";

const rooms = [
  {
    title: "Suite Room",
    price: "4,000₹",
    img: "2.png",
    aimg: "1-1.png",
    bimg: "1-2.png",
    capacity: "2 Adult + 1 Children",
    Ac: "Available",
    bed: "1 double bed, Sofa",
    services: "Kit, Breakfast, Wifi, Television, Bathroom...",
  },
  {
    title: "Suite room",
    price: "5,500₹",
    img: "3.png",
    aimg: "2-1.png",
    bimg: "2-2.png",
    capacity: "2 Adult + 1 Childern",
    Ac: "Available",
    bed: "1 Double bed, Sofa",
    services: "Kit, Breakfast, Television, Bathroom...",
  },
  {
    title: "Deluxe Room",
    price: "2,000₹",
    img: "4.png",
    aimg: "3-1.png",
    bimg: "3-2.png",
    capacity: "2 Adult + 1 Children ",
    Ac: "Available",
    bed: "1 Double Beds",
    services: "Wifi, Television, Bathroom...",
  },
  {
    title: "Super Deluxe Room",
    price: "2,200₹",
    img: "5.png",
    aimg: "4-1.png",
    bimg: "4-2.png",
    capacity: "2 Adult + 1 Children",
    Ac: "Available",
    bed: "1 double bed, Sitting Table",
    services: "kit, Wifi, Television, Bathroom...",
  },
  {
    title: "Deluxe room",
    price: "2,000₹",
    img: "6.png",
    aimg: "5-1.png",
    bimg: "5-2.png",
    capacity: "2 Adult + 1 Children",
    Ac: "Available",
    bed: "1 double bed",
    services: "Wifi, Television, Bathroom...",
  },
  {
    title: "Super Primium Room",
    price: "3,000₹",
    img: "13.png",
    aimg: "12-1.png",
    bimg: "12-2.png",
    capacity: "3 Adult + 1 Children",
    Ac: "Available",
    bed: "1 Double Bed ,1 Single Bed",
    services: "kit, sofa, breakfast, Wifi, Television, Bathroom...",
  },
  {
    title: "Single Room Primium",
    price: "2800₹",
    img: "12.png",
    aimg: "11-1.png",
    bimg: "12-2.png",
    capacity: "3 adult + 1 child",
    Ac: "Available",
    bed: "1 Double + 1 Single Bed",
    services: "kit, Brakefast, Wifi, Television, Bathroom...",
  },
  {
    title: "Deluxe Room",
    price: " 2,000₹",
    img: "8.png",
    aimg: "7-1.png",
    bimg: "7-2.png",
    capacity: "2 Adult + 1 Children ",
    Ac: "Available",
    bed: "1 Double Bed",
    services: "Wifi, Television, Bathroom...",
  },
  {
    title: "Super Deluxe Room",
    price: "2,200₹",
    img: "9.png",
    aimg: "8-1.png",
    bimg: "8-2.png",
    capacity: "2 Adult+ 1 Children ", 
    Ac: "Available",
    bed: "1 Double Bed",
    services: "kit, Wifi, Television, Bathroom...",
  },
  {
    title: "Super Primium Room",
    price: "3,000₹",
    img: "10.png",
    aimg: "9-1.png",
    bimg: "9-2.png",
    capacity: "3 Adult + 1 Children",
    Ac: "Available",
    bed: "1 Double Bed ,1 Single Bed ",
    services: "kit , Breakfast, Wifi, Television, Sofa, Bathroom...",
  },
  {
    title: "Deluxe Room",
    price: "2,000₹",
    img: "11.png",
    aimg: "10-1.png",
    bimg: "10-2.png",
    capacity: "2 Adult + 1 Children",
    Ac: "Available",
    bed: "1 Double bed",
    services: "Wifi, Television, Bathroom...",
  },
   {
    title: "Deluxe Room",
    price: "2,000₹",
    img: "12.png",
    aimg: "11-1.png",
    bimg: "12-2.png",
    capacity: "2 Adult + 1 Children",
    Ac: "Available",
    bed: "1 Double bed",
    services: "Wifi, Television, Bathroom...",
  },
];

const Rooms = () => {
  const roomsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          roomsRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (roomsRef.current) observer.observe(roomsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="rooms" className="rooms-container" ref={roomsRef}>

      {rooms.map((room, index) => (
        <div className="room-card" key={index}>
          <img src={room.img} alt={room.title} />

          {/* DEFAULT CONTENT */}
          <div className="room-basic">
            <h3>{room.title}</h3>
            <p>
              <span>{room.price}</span>/Pernight
            </p>
          </div>

          {/* HOVER CONTENT */}
          <div className="room-hover">
            <h3>{room.title}</h3>
            <p className="price">
              <span>{room.price}</span>/Pernight
            </p>

            <ul>
              <li>
                <b>Ac:</b> {room.Ac}
              </li>
              <li>
                <b>Capacity:</b> {room.capacity}
              </li>
              <li>
                <b>Bed:</b> {room.bed}
              </li>
              <li>
                <b>Services:</b> {room.services}
              </li>
            </ul>

            {/* ✅ Link-based navigation */}
            <Link
              to="/room-details"
              state={{ room }}
              style={{ textDecoration: "none" }}
            >
              <button>VIEW DETAILS</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
