function SideBar({activeSection}){
    return(
        
        <div className="sidebar">
            <h2>Sections</h2>
            <a href="#intro" className={activeSection === 'intro' ? 'active' : ''}>Introduction</a>
            <a href="#aboutme" className={activeSection === 'aboutme' ? 'active' : ''}>About Me</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills&tools" className={activeSection === 'skills&tools' ? 'active' : ''}>Skills & Tools</a>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact Me</a>
            {/* <a href="#stats">Education</a> */}
        </div>
        
    )

}

export default SideBar