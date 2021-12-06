import { BsGithub } from "react-icons/bs";

const Navbar = ({ visibility, scrollToSection }) => {
  return (
    <nav
      className={`navbar ${visibility ? "navbar--visible" : "navbar--hidden"}`}
    >
      <div className="navbar__links">
        <button
          onClick={() => scrollToSection("projects")}
          className="navbar__link projects-link"
        >
          <span className="letter">P</span>
          <span className="word">Projects</span>
        </button>
        <button
          onClick={() => scrollToSection("courses")}
          className="navbar__link courses-link"
        >
          <span className="letter">C</span>
          <span className="word">Courses</span>
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="navbar__link about-link"
        >
          <span className="letter">A</span>
          <span className="word">About</span>
        </button>
      </div>
      <div className="navbar__github">
        <a
          href="https://github.com/droomoord/kris-heijnen"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size="2.5em" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
