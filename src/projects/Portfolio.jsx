import "../App.css"
import { Link } from "react-router"
import { useEffect } from "react"
import { LuArrowLeft } from "react-icons/lu";

export default function Portfolio(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="content">
            <section>
                <Link to="/projects" className="back-button"><LuArrowLeft size={18}/> Back to Projects</Link>
                <h1>Hello this is my Project</h1>
            </section>
        </div>
    )
}