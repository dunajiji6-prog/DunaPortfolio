import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Hook this to your backend / Mailchimp / etc.
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footerInner">
        {/* Left */}
        <div className="footerLeft">
          <div className="footerName">
            Duna <span>jiji</span>
          </div>
          <p className="footerText">
            Building modern web apps with backend, AI, and clean UI.
          </p>

          <a className="contactBtn" href="#contact">
            Contact Me
          </a>
        </div>

        {/* Right */}
        <div className="footerRight">
          <form className="subscribe" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          <div className="footerBottom">
            <span>© {new Date().getFullYear()} Duna jiji</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
