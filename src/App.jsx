import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import NavBar from './components/NavBar'

function App() {
  const [hours,setHours] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)

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
    <div className="App">
      <NavBar time={timeString}/>
      
    </div>
  )
}

export default App
