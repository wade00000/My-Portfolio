import { useEffect, useState,useRef } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom';
import { Link } from "react-router";

function App() {
  const [hours,setHours] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)
  const [isPlaying,setIsPlaying] = useState(false)
  const [triggerAnimation, setTriggerAnimation] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, default to dark mode if nothing saved
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true // true = dark mode by default
  })

  const audio = useRef( new Audio("/senseixjay.mp3"))
  

  function handleMusic(){
      if(audio.current.paused){
          audio.current.play()
          setIsPlaying(true)
      }else{
          audio.current.pause()
          setIsPlaying(false)
      }
      audio.current.volume = 0.15
      audio.current.loop = true

  }

  const handleLogoHover = () => {
        setTriggerAnimation(false) // Reset
        setTimeout(() => setTriggerAnimation(true), 50) // Trigger again
  }

  const handleSectionClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if(el){
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

    

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const handleDark = () => setDarkMode(!darkMode)

  useEffect(()=>{
    function updateTime(){
        const now = new Date()

        let hours = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()

        hours = hours < 10 ? '0' + hours : hours
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
    }
    updateTime()
    const interval = setInterval(updateTime,1000)

    return () => clearInterval(interval)
  },[])

  const timeString = `${hours}:${minutes}:${seconds}`;
  
  
  return (
    <div className={darkMode ? "dark" : "light"}>
      <NavBar 
        time={timeString} 
        handleMusic={handleMusic} 
        handleDark={handleDark} 
        isPlaying={isPlaying}
        darkMode={darkMode}
        handleLogoHover={handleLogoHover}
        triggerAnimation={triggerAnimation}
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <h2>SECTIONS</h2>
        <Link to="/intro" onClick={() => handleSectionClick('intro')}>
          Introduction
        </Link>

        <Link to="/about"  onClick={() => handleSectionClick('aboutme')}>
          About Me
        </Link>

        <Link to="/projects" onClick={() => handleSectionClick('projects')}>
          Projects
        </Link>

        <Link to="/skills" onClick={() => handleSectionClick('skills-tools')}>
          Skills & Tools
        </Link>

        <Link to="/experience"onClick={() => handleSectionClick('experience')}>
          Experience
        </Link>

        <Link to="/education" onClick={() => handleSectionClick('education')}>
          Education
        </Link>

        <Link to="/contact" onClick={() => handleSectionClick('contact')}>
          Contact Me
        </Link>
      </div>

      <div className="container">
        <SideBar activeSection={activeSection} handleSectionClick={handleSectionClick}/>
        <Outlet 
          context={{
            setActiveSection,
            
          }}
        />
        
      </div>
      
    </div>
  )
}

export default App
