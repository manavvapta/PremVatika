import { useEffect, useRef } from "react";
import "./Footer.css";
import footerBg from "./bg.jpg"; // 👈 image SAME folder me hai

export default function Footer() {
  const footerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("footer-show");
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  return (
    <footer
      className="footer"
      ref={footerRef}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${footerBg})`,
      }}
    >
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-box">
          <h2>LuxuryStay</h2>
          <p>
            Experience premium comfort with modern rooms, secure bookings
            and trusted payment gateways worldwide.
          </p>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => scrollToSection("top")}>Home</li>
            <li onClick={() => scrollToSection("about-us")}>About Us</li>
            <li onClick={() => scrollToSection("rooms")}>Rooms</li>
            <li onClick={() => scrollToSection("services")}>More Services</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>
          <ul>
            <li>24/7 Front Desk & Security</li>
            <li>Housekeeping & Laundry</li>
            <li>Restaurant & Room Service</li>
            <li>Safe & Secure Environment</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 Ratlam–Sailana–Banswara Road, Ratlam (M.P.)</p>
          <p>📧 Premvatikahotel@gmail.com</p>
          <p>📞 +91 7869265143</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Prem Vatika. All Rights Reserved. By ManavVapta~@codewithpriyanshi
      </div>
    </footer>
  );
}
