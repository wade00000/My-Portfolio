import { NavLink } from "react-router-dom"
import { useRef } from "react"
import { RxGithubLogo } from "react-icons/rx";
import { LuMusic,LuMoon } from "react-icons/lu";
import { AiOutlineSun } from "react-icons/ai";
import { TbCircleDashedLetterW } from "react-icons/tb";

function NavBar({time,handleMusic,handleDark,darkMode}){
    
    
    return(
        <nav className="navbar">
           <div className="nav-left">
                <div className="logo"> WADE/></div>
                <NavLink to="#intro" end>Home</NavLink>
                <a href="https://www.linkedin.com/in/wade-namada-b1b629363/" target="_blank">LinkedIn</a>
                <a href="">Resume</a>
           </div>
           
           <div className="nav-right">
                <a href="https://github.com/wade00000" target="_blank">
                    <RxGithubLogo size={18} />
                </a>

                <button className="music-button" onClick={handleMusic}>
                  <LuMusic size={18}/>
                </button>

                <button className="theme-toggle" onClick={handleDark}>
                    {darkMode ? <AiOutlineSun size={18}/> : <LuMoon size={18}/>}
                </button>

                {time} {/* This is your dark mode toggle I assume? */}
           </div>
        </nav>
    )       
}

export default NavBar