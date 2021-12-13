import { BsGithub } from "react-icons/bs";

import { useState, useEffect } from "react";

const Navbar = ({
  scrollToSection,
  scrollPos,
  documentHeight,
  windowHeight,
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress((scrollPos / (documentHeight - windowHeight)).toFixed(2));
  }, [documentHeight, scrollPos, windowHeight]);
  return (
    <nav
      className={`navbar ${
        scrollPos > 10 ? "navbar--visible" : "navbar--hidden"
      }`}
    >
      <div
        className="progress-bar"
        style={{
          transform: `scaleX(${progress})`,
        }}
      ></div>

      <div className="navbar__links">
        <button
          onClick={() => scrollToSection("projects")}
          className="navbar__link projects-link"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("courses")}
          className="navbar__link courses-link"
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="navbar__link about-link"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="navbar__link contact-link"
        >
          Contact
        </button>
      </div>
      <div className="side-links">
        <div className="github">
          <a
            href="https://github.com/droomoord/kris-heijnen"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size="2.5em" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
