import "../App.css"
import { Link } from "react-router"
import { useEffect } from "react"

export default function SpotifyProject(){
    useEffect(() => {
        window.scrollTo(0, 0) // Scroll to top when component mounts
    }, [])

    return(
        <div className="content">
            <section>
                {/* <button onClick={()=>navigate('/projects')}>← Back to Projects</button> */}
                <Link to="/projects" className="back-button">← Back to Projects</Link>
                <h1>Hello this is my Project</h1>
            </section>
        </div>
        
    )
}