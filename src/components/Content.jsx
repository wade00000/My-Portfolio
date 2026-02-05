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
    <img
      src="https://c.tenor.com/i802gAn6zIYAAAAC/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>

  <section ref={observer} id="aboutme">
    <img
      src="https://c.tenor.com/KsvZ1G5XL1UAAAAd/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>

  <section ref={observer} id="projects">
    <img
      src="https://c.tenor.com/faf11erEYVIAAAAC/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>

  <section ref={observer} id="skills&tools">
    <img
      src="https://c.tenor.com/Jf1PRWBJ2f0AAAAd/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>

  <section ref={observer} id="experience">
    <img
      src="https://c.tenor.com/AWCoCHFc7D4AAAAC/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>

  <section ref={observer} id="education">
    <img
      src="https://c.tenor.com/be4PjQem2fgAAAAC/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>

  <section ref={observer} id="contact">
    <img
      src="https://c.tenor.com/SETdjIBbTTcAAAAd/tenor.gif"
      style={{ maxWidth: '500px' }}
    />
  </section>
</div>

        
    )

}

export default Content