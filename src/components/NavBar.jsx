import { NavLink } from "react-router-dom"
import { useRef } from "react"

function NavBar({time}){
    const audio = useRef(new Audio("/senseixjay.mp3"))

    function handleMusic(){
        if(audio.current.paused){
            audio.current.play()
        }else{
            audio.current.pause()
        }

        audio.current.loop = true
    }
    
    return(
        <nav className="navbar">
           <div className="nav-left">
                <div className="logo">MyLogo</div>
                <NavLink to="/app" end>Home</NavLink>
                <a href="https://www.linkedin.com/in/wade-namada-b1b629363/" target="_blank">LinkedIn</a>
                <a href="">Resume</a>
           </div>
           
           <div className="nav-right">
                <a href="https://github.com/yourusername" target="_blank">
                    {/* GitHub icon here */}
                    GitHub
                </a>
                <button 
                className="music-button"
                onClick={handleMusic}
                >
                Music
                </button>
                {time} {/* This is your dark mode toggle I assume? */}
           </div>
        </nav>
    )       
}

export default NavBar