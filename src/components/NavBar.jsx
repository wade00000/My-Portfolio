import { NavLink } from "react-router-dom"
import { useRef } from "react"
import { RxGithubLogo } from "react-icons/rx";
import { LuMusic,LuMoon,LuExternalLink } from "react-icons/lu";
import { AiOutlineSun } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar({time,handleMusic,handleDark,darkMode,isPlaying,triggerAnimation,handleLogoHover,setMenuOpen,menuOpen}){
     
    return(
        <nav className="navbar">
           <div className="nav-left">
                 <button className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                   <GiHamburgerMenu size={18} />
                </button>
                <div
                 className={`logo ${triggerAnimation ? 'animate' : ''}`}
                 onMouseEnter={handleLogoHover}
                > C:\wa-dev\
                </div>
                <a href="/">Home</a>
                <a href="" >LinkedIn <LuExternalLink size={12}/></a>
                <a href="">Resume <LuExternalLink size={12}/></a>
           </div>
           
           <div className="nav-right">
                <a className="right" href="https://github.com/wade00000" target="_blank" title="Github">
                    <RxGithubLogo size={18} />
                </a>

                <button  className={`right ${isPlaying ? 'playing' : ''}`} onClick={handleMusic} title="Play Music">
                  <LuMusic size={18}/>
                </button>

                <button  className="theme-toggle right" onClick={handleDark} title="Toggle Light/Dark">
                    {darkMode ? <AiOutlineSun size={18}/> : <LuMoon size={18}/>}
                </button>
                <span className="time">{time}</span>
           </div>
        </nav>
    )       
}

export default NavBar