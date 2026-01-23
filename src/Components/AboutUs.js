import { useEffect, useRef } from "react";
import "./AboutUs.css";

function AboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="about-us" className="about" ref={sectionRef}>
      <div className="about-left">
        <h2>About Us</h2>

        <p>
          Owner :- Mr.Amrat patidar,
        </p>

        <ul>
          <li>We create experiences, not just stays.</li>
          <li>Thoughtfully designed rooms for total comfort.</li>
          <li>Easy access with a calm, peaceful atmosphere.</li>
          <li>Clean spaces, premium comfort, every time.</li>
        </ul>
      </div>

      <div className="about-right">
        <img className="rimg" src="/aboutus.jpg" alt="Payments Preview" />
      </div>
    </section>
  );
}

export default AboutUs;