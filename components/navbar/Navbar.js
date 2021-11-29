const Navbar = ({ visibility, scrollToSection }) => {
  return (
    <nav
      className={`navbar ${visibility ? "navbar--visible" : "navbar--hidden"}`}
    >
      <div className="navbar__links">
        <button
          onClick={() => scrollToSection("projects")}
          className="navbar__link link--projects"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("courses")}
          className="navbar__link link--courses"
        >
          Courses
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="navbar__link link--about"
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
