import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroCarousel.css";

const slides = [
  {
    type: "Restuarant + Small Party Hall Like Kitty Party ,Birthday Party etc",
    title: "Family Hall",
    desc: "Perfect place for family dining & celebrations.",
    img: "cr3.JPG",
    aimg: "cr31.JPG",
    bimg: "cr32.JPG",
    price: "On Demand",
    size: "Spacious Hall",
    capacity: "Max 30-40 Guests",
    services: "Dining, Quite hall, Washroom",
  },
  {
    type: "All Types Of Celebration Birthday, Engagement, Haldi , Mehndi etc",
    title: "Banquet Hall",
    desc: "Ideal for birthdays, parties & events.",
    img: "cr1.JPG",
    aimg: "cr11.JPG",
    bimg: "cr12.JPG",
    price: "2,000₹ per hour",
    size: "40 × 70",
    capacity: "Max 200-250 Guests",
    services: "Lighting, AC,Large Area",
  },
  {
    type: " All Type Of Celebration Birthday Party, Engagement, Haldi , mehndi etc",
    title: "Banquet Hall",
    desc: "Ready for your DJ nights.",
    img: "cr2.JPG",
    aimg: "cr21.JPG",
    bimg: "cr2.JPG",
    price: "3,000₹ per hour",
    size: "40 × 70",
    capacity: "Max 200-250 Guests",
    services: "Large Area, Lighting, AC, Window View etc",
  },
  {
    type: "Lush Green ,Open Space",
    title: "Marriage Garden",
    desc: "In-house decoration packages (themes, lighting, stage setup).Policy on outside decorators",
    img: "cr4.JPG",
    aimg: "cr41.JPG",
    bimg: "cr42.JPG",
    price: "3,000₹ per hour",
    size: "40 × 70",
    capacity: "Max 200-250 Guests",
    services: "on-site rooms available for guests - AC deluxe rooms, luxury suites). Groom/Bridal suites.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const carouselRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 100);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section id="services" className="carousel" ref={carouselRef}>
      <div className={`slide ${animate ? "animate" : ""}`}>
        {/* TEXT */}
        <div className="slide-text">
          <span>WELCOME TO PREM VATIKA</span>
          <h1>{slide.title}</h1>
          <p>{slide.desc}</p>

          {/* ✅ ROOM DETAILS PAGE */}
          <Link
            to="/service-details"
            state={{ service: slide }}
            style={{ textDecoration: "none" }}
          >
            <button>More Details →</button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="slide-img">
          <img className="rimg" src={slide.img} alt={slide.title} />
        </div>
      </div>
    </section>
  );
}
