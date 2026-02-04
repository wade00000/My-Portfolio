import { useEffect, useState,useRef } from 'react'

function Content({setActiveSection}){

    const observerRef = useRef(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id)
                } 
        })
        },{
            
        })

        return () => observerRef.current.disconnect()
      
    }, [])

    const observer = el => {
        if (el && observerRef.current){
            observerRef.current.observe(el)
        }
    }

    return(
        
        <div className="content">
            <section ref={observer} id="intro">Introduction</section>
            <section ref={observer} id ="aboutme">About Me</section>
            <section ref={observer} id ="projects">Projects</section>
            <section ref={observer} id ="skills&tools">Skills & Tools</section>
            <section ref={observer} id ="experience">Experience</section>
            <section ref={observer} id ="education">Education</section>
            <section ref={observer} id ="contact">Contact Me</section>
        </div>
        
    )

}

export default Content