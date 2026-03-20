import { useState } from "react";
import Hero from "./Hero";   // 👈 Hero import

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between">
          
          <div className="left flex items-center">
            <div className="branding">
              <img src="/images/logo.png" alt="" />
            </div>

            <div id="main-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Skills</a>
              <a href="#work">Works</a>
              <a href="#projects">Projects</a>
            </div>
          </div>

          <div className="right">
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>
          </div>
        </nav>
      </div>

      {/* ✅ Hero component yaha use hoga */}
      <Hero />

      {/* Hamburger */}
      <button className="hamberger" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <button className="times" onClick={() => setOpen(false)}>
          ✕
        </button>

        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#work" onClick={() => setOpen(false)}>Work</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;