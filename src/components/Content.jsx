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
            threshold: 0.5
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
  <section ref={observer} id="intro">
    <h1>Wade Namada — Developer & Problem Solver</h1>
    <h1 className="grey">Solving real life problems,one line of code at a time</h1>
  </section>

  <section ref={observer} id="aboutme">
    <h1>About</h1>
    <h1 className="grey">Who I Am and How I Think About Code</h1>
  </section>

  <section ref={observer} id="projects">
    <h1>Projects</h1>
    <h1 className="grey">Things I’ve Built to Learn and Solve Problems</h1>
  </section>

  <section ref={observer} id="skills&tools">
    <h1>Skills</h1>
    <h1 className="grey">Technologies and Tools I Work With</h1>
  </section>

  <section ref={observer} id="experience">
    <h1>Experience</h1>
    <h1 className="grey">How I’ve Applied What I’ve Learned</h1>
  </section>

  <section ref={observer} id="education">
    <h1>Education</h1>
    <h1 className="grey">How I’ve Built My Foundations</h1>
  </section>

  <section ref={observer} id="contact">
    <h1>Contact</h1>
    <h1 className="grey">Let’s Connect or Build Something Together</h1>
  </section>

  {/* Image sources kept for future use:
    https://c.tenor.com/i802gAn6zIYAAAAC/tenor.gif
    https://c.tenor.com/KsvZ1G5XL1UAAAAd/tenor.gif
    https://c.tenor.com/faf11erEYVIAAAAC/tenor.gif
    https://c.tenor.com/Jf1PRWBJ2f0AAAAd/tenor.gif
    https://c.tenor.com/AWCoCHFc7D4AAAAC/tenor.gif
    https://c.tenor.com/be4PjQem2fgAAAAC/tenor.gif
    https://c.tenor.com/SETdjIBbTTcAAAAd/tenor.gif
  */}
</div>

)}

export default Content