import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Senior System Engineer", "Developer"],
      loop: true,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1200,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero-container">
      {/* Particles layer */}
      <div className="particles" />

      <div className="hero-image">
        <img src="/girl.png" alt="Profile" />
      </div>

      <div className="hero-content">
        <h3>Hello, I'm</h3>
        <h1>Duna Jiji</h1>
        <h2>
          And I'm a <span ref={el}></span>
        </h2>
        <p>Computer Science Engineer</p>

        <div className="hero-btn">
          <a className="btn" href="#contact">
            Hire Me
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
