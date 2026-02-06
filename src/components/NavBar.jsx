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
                <a id="right" href="https://github.com/wade00000" target="_blank" title="Github">
                    <RxGithubLogo size={18} />
                </a>

                <button id="right" className={isPlaying ? 'playing' : ''} onClick={handleMusic} title="Play Music">
                  <LuMusic size={18}/>
                </button>

                <button id="right" className="theme-toggle" onClick={handleDark} title="Toggle Light/Dark">
                    {darkMode ? <AiOutlineSun size={18}/> : <LuMoon size={18}/>}
                </button>

                {time}
           </div>
        </nav>
    )       
}

export default NavBar