import { NavLink } from "react-router-dom"
import { useRef } from "react"
import { RxGithubLogo } from "react-icons/rx";
import { LuMusic,LuMoon,LuExternalLink } from "react-icons/lu";
import { AiOutlineSun } from "react-icons/ai";
import { TbCircleDashedLetterW } from "react-icons/tb";
import { PiLineVerticalBold } from "react-icons/pi";

function NavBar({time,handleMusic,handleDark,darkMode,isPlaying,triggerAnimation,handleLogoHover}){
     
    return(
        <nav className="navbar">
           <div className="nav-left">
                <div
                 className={`logo ${triggerAnimation ? 'animate' : ''}`}
                 onMouseEnter={handleLogoHover}
                > C:\wa-dev\
                </div>
                <a href="#intro">Home</a>
                <a href="" >LinkedIn <LuExternalLink size={12}/></a>
                <a href="">Resume <LuExternalLink size={12}/></a>
           </div>
           
           <div className="nav-right">
                <a href="https://github.com/wade00000" target="_blank">
                    <RxGithubLogo size={18} />
                </a>

                <button className={isPlaying ? 'playing' : 'not-playing'} onClick={handleMusic} title="Play Music">
                  <LuMusic size={18}/>
                </button>

                <button className="theme-toggle" onClick={handleDark} title="Toggle Light/Dark">
                    {darkMode ? <AiOutlineSun size={18}/> : <LuMoon size={18}/>}
                </button>

                {time} {/* This is your dark mode toggle I assume? */}
           </div>
        </nav>
    )       
}

export default NavBar