import { useEffect, useState } from "react";
import ContactForm from "../Form/ContactForm";
import "./GlassNavbar.css";


function GlassNavbar() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // 🔹 simple scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // mobile menu close
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <span></span>
      </div>
    );
  }

  return (
    <nav className="glass-nav">
      <img className="logo" src="logo.jpg" alt="logo" />

      <ul className={open ? "menu open" : "menu"}>
        <li onClick={() => scrollToSection("top")}>
          Home
        </li>

        <li onClick={() => scrollToSection("about-us")}>About Us</li>

        <li onClick={() => scrollToSection("rooms")}>Room</li>

        <li onClick={() => scrollToSection("services")}>More Services</li>
      </ul>

      <button
        type="button"
        className="glass-btn dark"
        onClick={() => setShowContact(true)}
      >
        Contact Us
      </button>

      <div
        className={open ? "hamburger active" : "hamburger"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}

    </nav>
  );
}

export default function Navbar() {
  return (
    <div className="app" id="top">
      {/* DESKTOP VIDEO */}
      <video className="bg-video desktop-video" autoPlay muted loop playsInline>
        <source src="/main.mp4" type="video/mp4" />
      </video>

      {/* MOBILE VIDEO */}
      <video className="bg-video mobile-video" autoPlay muted loop playsInline>
        <source src="/mobile.mp4" type="video/mp4" />
      </video>

    
      <GlassNavbar />

      {/* HERO TEXT */}
      <div className="hero-text">
        <h1>PREM</h1>
        <h2>VATIKA</h2>
      </div>

    </div>
  );
}
