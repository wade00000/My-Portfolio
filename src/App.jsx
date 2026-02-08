import { useEffect, useState,useRef } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Content from './components/Content'

function App() {
  const [hours,setHours] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)
  const [isPlaying,setIsPlaying] = useState(false)
  const [triggerAnimation, setTriggerAnimation] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, default to dark mode if nothing saved
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true // true = dark mode by default
  })

  const audio = useRef( new Audio("/senseixjay.mp3"))
  audio.current.volume = 0.15

  function handleMusic(){
      if(audio.current.paused){
          audio.current.play()
          setIsPlaying(true)
      }else{
          audio.current.pause()
          setIsPlaying(false)
      }
      audio.current.loop = true
  }

  const handleLogoHover = () => {
        setTriggerAnimation(false) // Reset
        setTimeout(() => setTriggerAnimation(true), 50) // Trigger again
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
      />
      <div className="container">
        <SideBar activeSection={activeSection}/>
        <Content 
          setActiveSection={setActiveSection}  
          activeSection={activeSection} 
        />
        
      </div>
      
    </div>
  )
}

export default App
