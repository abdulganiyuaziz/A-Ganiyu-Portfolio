import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // Close menu on link click

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1 className="logo">A.Ganiyu~</h1>

        {/* Hamburger icon for mobile */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="AboutMe"
             smooth={true}
              duration={500}
               onClick={closeMenu}
               >
              About Me
            </Link>
          </li>
          <li>
            <Link to="Resume"
             smooth={true}
              duration={500} 
              onClick={closeMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="Testimonial"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="ContactMe"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
