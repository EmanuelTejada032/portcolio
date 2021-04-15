import React from 'react'
import background from '../../img/herobgtest.jpg'
import { SvgLogos, Projects } from '../../data'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const MainContent = () => {

    return (
      <>
        <header className="overlay" style={{backgroundImage: `url(${background})`, backgroundPosition: 'center'}}>
            <h2>I'm Emanuel Tejada</h2>
            <h4>Web developer</h4>
        </header>
        <section>
          <section className='about'>
          <h2>About Me</h2>
          <p>Hi! My name is Emanuel and I'm currently a software developer graduated from the ITSC, I'm also a self taugth web     developer. I'd like to say learning to code has been dificult a journey, however I keep putting effort and dedicating time every day learning new skills  and improving what I already kno to bring value to any future employer or customer that I could have. Even if it's difficult learning to code, I belive in my habilities to learn and keep going this road much further</p>
          </section>
          <section>
                <h2>Skills</h2>
                <div className='skills'>
                  {SvgLogos.map( (logo, i) => (
                     <div key={i} className='skill'>
                       <img  src={logo.url} alt={logo.alt} />
                       <h4>{logo.name}</h4>
                     </div>  
                   ))}
                </div>
                   
          </section>
         </section>
          <main>   
              <h2>Projects</h2>
              <div className='projects'>
              {Projects.map( (project, i) => (
                <div key={i} className='project'>
                  <div className='project-info'>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className='tech-icons'>
                      {project.usedTech.map((icon, i) =>(
                        <img className='tech-icon' src={icon} alt='tech icon'  key={i} />
                      ))}
                    </div>
                    <div className='buttons'>
                        <a href={project.github} rel="noreferrer" target='_blank' className='button'>Github <i><AiFillGithub /></i></a>
                        <a href={project.deployed} rel="noreferrer" target='_blank' className='button'>Live <i><BiWorld /></i></a>
                    </div>
                   
                  </div>
                  <img src={project.image} alt={project.alt} className='project-image'/>
                </div>
              ))}
              </div>
          </main>
        
      </>
    )
}

export default MainContent
