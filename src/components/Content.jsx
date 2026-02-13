import { useEffect, useState,useRef } from 'react'
import Card from './Card'
import { useNavigate, useOutletContext } from "react-router"
import { useLocation } from "react-router";
import StackIcon from "tech-stack-icons";
import { LuMail } from "react-icons/lu";


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

  const techStack=[
    {icon : "html5",name :"HTML"},
    {icon : "css3",name:"CSS"},
    {icon : "js",name :"Javascript"},
    {icon : "typescript",name:"Typescript"},
    {icon : "python",name:"Python"},
    {icon : "react",name:"ReactJS"},
    {icon : "nextjs2",name:"NextJS"},
    {icon : "vercel",name:"Vercel"},
    {icon : "docker",name:"Docker"},
    {icon : "git",name:"Git"},
    {icon : "postman",name:"Postman"},
  ]


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
            threshold: 0.6,
            rootMargin: "-20% 0px -20% 0px"
        })

        return () => observerRef.current.disconnect()
      
  }, [location.pathname,navigate])

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
    <p>
      I build thoughtful web applications  with clean architecture and scalable design. 
      Currently focused on full-stack development and exploring data engineering.
    </p>
    <a className='email'  href='mailto:meantoine12@gmail.com'><LuMail size={18}/>Email Me</a>
    
  </section>

  <section ref={observer} id="aboutme">
    <h1 className="show">About Me</h1>
    <h1 className="grey">Who I Am and How I Think About Code</h1>
    <p>
      I got into development young — fascinated by how computers worked and captivated by 
      the idea that someone with the right skills could build or break anything from behind 
      a screen. While I'm not chasing the hacker aesthetic anymore, that early curiosity about 
      systems and how things work under the hood has stuck with me. 
    </p>

    <p>
      What keeps me engaged now is building systems that not only solve real problems today, 
      but are designed to scale and evolve. My focus is on understanding how different parts 
      of a system interact from frontend to backend and how thoughtful architecture early 
      on shapes long-term reliability. 
    </p>

    <p>
      That systems-level thinking has naturally led me toward 
      data engineering, where I'm exploring how data flows through applications and how it can 
      be structured to deliver real value.
    </p>
   

  </section>

  <section ref={observer} id="projects">
    <h1>My Projects</h1>
    <h1 className="grey">Things I’ve Built to Learn and Solve Problems</h1>
    <div className="projects-grid">
      <Card 
        title="SpotifyMe - Spotify Music Analytics"
        image="./spotify.png"
        techStack={['SpotifyAPI', 'React', 'CSS']}
        link="/projects/spotify-analytics"
      />
      <Card 
        title="Portfolio | Wade Namada"
        image="./portfolio2.png"
        techStack={['React', 'CSS']}
        link="/projects/my-portfolio"
      />
      {/*<Card 
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
    <p>
     Below are the technologies and tools I use to build reliable, scalable systems across the stack.
    </p>
    <div className='badge-container'>

      {techStack.map((tech) => (
          <span className='badge' key={tech.icon}>
            <StackIcon 
              name={tech.icon}
              className="stack-icon" 
            />  
            {tech.name}
          </span>
      ))}
    </div>
  </section>

  <section ref={observer} id="experience">
    <h1>Experience</h1>
    <h1 className="grey">How I’ve Applied What I’ve Learned</h1>
  </section>

  <section ref={observer} id="education">
    <h1>Education</h1>
    <h1 className="grey">How I’ve Built My Foundations</h1>
  </section>

  {/* <section ref={observer} id="contact">
    <h1>Contact Me</h1>
    <h1 className="grey">Let’s Connect or Build Something Together</h1>
  </section> */}

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