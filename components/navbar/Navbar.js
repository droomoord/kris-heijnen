import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import { useState, useEffect } from "react";

const Navbar = ({
  scrollToSection,
  scrollPos,
  documentHeight,
  windowHeight,
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress((scrollPos / (documentHeight - windowHeight)).toFixed(1));
  }, [documentHeight, scrollPos, windowHeight]);
  function clicked(section, e) {
    console.log(e);

    scrollToSection(section);
    e.target.classList.add("link--active");
  }
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
          onClick={(e) => clicked("projects", e)}
          className="navbar__link projects-link"
        >
          Projects
        </button>
        <button
          onClick={(e) => clicked("courses", e)}
          className="navbar__link courses-link"
        >
          Education
        </button>
        <button
          onClick={(e) => clicked("about", e)}
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
          <GrMail />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
