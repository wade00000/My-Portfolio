import { useEffect, useState,useRef } from 'react'
import Card from './Card'
import { useNavigate, useOutletContext } from "react-router"
import { useLocation } from "react-router";


function Content(){
  const {setActiveSection} = useOutletContext()
  const location = useLocation()
  const navigate = useNavigate()

  const observerRef = useRef(null)
  const isScrollingRef = useRef(false)
  const hasInitialScrolled = useRef(false)
  

  const routeToSection = {
  "/": "intro",
  "/about": "aboutme",
  "/projects": "projects",
  "/skills": "skills-tools",
  "/experience": "experience",
  "/education": "education",
  "/contact": "contact",
  };

  const sectionToRoute = {
    "intro": "/intro",
    "aboutme": "/about",
    "projects": "/projects",
    "skills-tools": "/skills",
    "experience": "/experience",
    "education": "/education",
    "contact": "/contact"
  }


  useEffect(()=>{
    if(isScrollingRef.current){
      isScrollingRef.current = false
      return
    }

    const sectionId = routeToSection[location.pathname]
    if(!sectionId) return

    const el = document.getElementById(sectionId)

    if(el){
      el.scrollIntoView({ behavior: "smooth" });
      hasInitialScrolled.current = true // Mark that initial scroll happened
    }
  },[location.pathname])



  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
          if(entry.isIntersecting){
            const sectionId = entry.target.id
            setActiveSection(sectionId)
          

            const route = sectionToRoute[sectionId]

          
          // Only update URL if we've done the initial scroll
          if(hasInitialScrolled.current && route && location.pathname !== route){
            isScrollingRef.current = true //prevents the auto scroll effect from runnin when someone uses manual scroll
            navigate(route,{replace : true}) // replace : true doesnt add to browser history preventing a trigger of scroll logic
          }}
      })},{
            threshold: 0.5
        })

        return () => observerRef.current.disconnect()
      
  }, [location.pathname])

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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </section>

  <section ref={observer} id="aboutme">
    <h1 className="show">About</h1>
    <h1 className="grey">Who I Am and How I Think About Code</h1>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
  </section>

  <section ref={observer} id="projects">
    <h1>My Projects</h1>
    <h1 className="grey">Things I’ve Built to Learn and Solve Problems</h1>
    <div className="projects-grid">
      <Card 
        title="SpotifyMe - Spotify Music Analytics"
        image="./spotify.png"
        techStack={['Tech', 'Tech', 'Tech']}
        link="/projects/spotify-analytics"
      />
      <Card 
        title="Portfolio | Wade Namada"
        image="https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg"
        techStack={['Tech', 'Tech', 'Tech']}
        link=""
      />
      <Card 
        title="Project Name"
        image="https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg"
        techStack={['Tech', 'Tech', 'Tech']}
        link=""
      />
      {/* <Card 
        title="Project Name"
        image="https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg"
        techStack={['Tech', 'Tech', 'Tech']}
        link=""
      />
      <Card 
        title="Project Name"
        image="https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg"
        techStack={['Tech', 'Tech', 'Tech']}
        link=""
      />
      <Card 
        title="Project Name"
        image="https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg"
        techStack={['Tech', 'Tech', 'Tech']}
        link=""
      /> */}
    </div>
  </section>

  <section ref={observer} id="skills-tools">
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