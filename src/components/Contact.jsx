import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* LEFT IMAGE */}
        <div className="contact-image">
          {/* Replace image path with your own */}
          <img src="/cont.png" alt="Contact illustration" />
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <h2>
            Get in <span>Touch</span>
          </h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
