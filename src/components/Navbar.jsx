import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <a className="logo" style={{ "--i": 1 }} href="#home" onClick={() => setOpen(false)}>
          Port<span>folio</span>
        </a>

        {/* Menu Button (mobile) */}
        <button
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {links.map((item, i) => (
            <li key={item} style={{ "--i": i + 2 }}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CV */}
        <a
          className="cvbtn cv-desktop"
          style={{ "--i": 8 }}
          href="/cv.pdf"
          download
          aria-label="Download CV"
        >
          <i className="fa-solid fa-download"></i>
          <span className="cvtext">CV</span>
        </a>

        {/* Overlay (click anywhere closes) */}
        <div
          className={`nav-overlay ${open ? "active" : ""}`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu (slides from top) */}
        <div className={`nav-menu ${open ? "active" : ""}`} onClick={() => setOpen(false)}>
          <ul>
            {links.map((item, i) => (
              <li key={item} style={{ "--i": i + 2 }}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="cvbtn"
            style={{ "--i": 8 }}
            href="/cv.pdf"
            download
            onClick={() => setOpen(false)}
            aria-label="Download CV"
          >
            <i className="fa-solid fa-download"></i>
            <span className="cvtext">CV</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
