import { Link } from "react-router";

function SideBar({ activeSection }) {
  
// handles duplicate clicks
  const handleSectionClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if(el){
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="sidebar">
      <h2>Sections</h2>

      <Link 
        to="/" 
        className={activeSection === "intro" ? "active" : ""}
        onClick={() => handleSectionClick('intro')}
      >
        Introduction
      </Link>

      <Link 
        to="/about" 
        className={activeSection === "aboutme" ? "active" : ""}
        onClick={() => handleSectionClick('aboutme')}
      >
        About Me
      </Link>

      <Link 
        to="/projects" 
        className={activeSection === "projects" ? "active" : ""}
        onClick={() => handleSectionClick('projects')}
      >
        Projects
      </Link>

      <Link 
        to="/skills" 
        className={activeSection === "skills-tools" ? "active" : ""}
        onClick={() => handleSectionClick('skills-tools')}
      >
        Skills & Tools
      </Link>

      <Link 
        to="/experience" 
        className={activeSection === "experience" ? "active" : ""}
        onClick={() => handleSectionClick('experience')}
      >
        Experience
      </Link>

      <Link 
        to="/education" 
        className={activeSection === "education" ? "active" : ""}
        onClick={() => handleSectionClick('education')}
      >
        Education
      </Link>

      <Link 
        to="/contact" 
        className={activeSection === "contact" ? "active" : ""}
        onClick={() => handleSectionClick('contact')}
      >
        Contact Me
      </Link>
    </div>
  );
}

export default SideBar;