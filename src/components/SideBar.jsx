import { Link } from "react-router";

function SideBar({ activeSection }) {
  return (
    <div className="sidebar">
      <h2>Sections</h2>

      <Link to="/" className={activeSection === "intro" ? "active" : ""}>
        Introduction
      </Link>

      <Link to="/about" className={activeSection === "aboutme" ? "active" : ""}>
        About Me
      </Link>

      <Link to="/projects" className={activeSection === "projects" ? "active" : ""}>
        Projects
      </Link>

      <Link to="/skills" className={activeSection === "skills-tools" ? "active" : ""}>
        Skills & Tools
      </Link>

      <Link to="/experience" className={activeSection === "experience" ? "active" : ""}>
        Experience
      </Link>

      <Link to="/education" className={activeSection === "education" ? "active" : ""}>
        Education
      </Link>

      <Link to="/contact" className={activeSection === "contact" ? "active" : ""}>
        Contact Me
      </Link>
    </div>
  );
}

export default SideBar;
