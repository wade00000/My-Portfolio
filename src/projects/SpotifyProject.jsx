import "../App.css"
import { Link } from "react-router"
import { useEffect } from "react"
import { LuArrowLeft } from "react-icons/lu";

export default function SpotifyProject(){
    useEffect(() => {
        window.scrollTo(0, 0) // Scroll to top when component mounts
    }, [])

    return(
        <div className="content">
            <section>
                {/* <button onClick={()=>navigate('/projects')}>← Back to Projects</button> */}
                <Link to="/projects" className="back-button"><LuArrowLeft size={18}/> Back to Projects</Link>
                <h1>Hello this is my Project</h1>
            </section>
        </div>
        
    )
}