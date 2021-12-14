import { BsGithub } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

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

      <div className="navbar__primary-links">
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
      </div>
      <div className="navbar__secondary-links">
        <a
          href="https://github.com/droomoord/kris-heijnen"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <div onClick={() => scrollToSection("contact")}>
          <SiMinutemailer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
