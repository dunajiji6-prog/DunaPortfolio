import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./About.css";

export default function About() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "I am a Senior System Engineer at Infosys with over 3+ years of professional experience, where I have worked on developing, maintaining, and optimizing enterprise-level applications while ensuring high performance, reliability, and quality standards.",
        "I am an AI enthusiast who is deeply passionate about artificial intelligence, machine learning, and emerging technologies, constantly exploring how intelligent systems can be leveraged to solve real-world problems and drive innovation.",
        "Alongside my professional career, I am a developer who enjoys building modern web applications, writing clean and maintainable code, and crafting meaningful digital experiences using the latest technologies and best practices."
      ],
      typeSpeed: 35,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>
          Hello, I am <span className="highlight">Duna Jiji</span>
        </h1>

        <p className="about-description">
          <span ref={typingRef}></span>
        </p>

        <div className="about-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>

<a href="tel:+919747912953">
  <i className="fa-solid fa-phone-volume"></i>
</a>

          

          <a href="mailto:dunajiji6@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
