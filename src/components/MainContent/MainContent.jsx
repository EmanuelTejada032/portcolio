import React from 'react'
import { Link } from 'react-scroll'
import { SvgLogos, Projects } from '../../data'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Form from '../Form/Form'
import {socialMedias} from '../../data'


const MainContent = () => {

    return (
      <>
        <header className="hero">
            <ul className='hero-links'>
              {socialMedias.map((socialMedia, i) => (
                <li key={i}><a href={socialMedia.url} target='_blank' rel="noreferrer" className='test'>{socialMedia.icon}</a></li>
              ))}
            </ul>
            <div className='main-hero' data-aos='fade-right' data-aos-duration='2000' >
              <p>My name is</p>
              <h2>Emanuel Tejada</h2>
              <h4>Web developer</h4>
              <Link spy={true}
                    smooth={true}
                    offset={-135}
                    duration={1000} 
                    activeClass='active' 
                    to='contact'
                    className='hero-btn'>Get in touch</Link>
            </div>
        </header>
        <section className='about'>
          <div className='about-text'>
            <h2>About Me</h2>
            <p>Hi! My name is Emanuel and I'm currently a software developer graduated from the ITSC, I'm also a self taugth web developer. I'd like to say learning to code has been a dififult journey, however I keep putting effort and time every day learning new skills  and improving what I already know to bring value to any future employer or customer I could have. Even if it's difficult, I belive in my habilities to learn and keep going this road much further</p>
          </div>
          <div className='about-skills'>
                <h2>Skills</h2>
                <div className='skills-container'>
                  {SvgLogos.map( (logo, i) => (
                     <div key={i} className='skill'>
                       <img  src={logo.url} alt={logo.alt} />
                       <p>{logo.name}</p>
                     </div>  
                   ))}
                </div>      
          </div>
         </section>
          <main className='projects'>   
              <h2 className='projects-title'>Projects</h2>
              <div className='projects-container'>
              {Projects.map( (project, i) => (
                <div key={i} className='project' data-aos={project.fade} data-aos-duration='1000'>
                  <div className='project-info'>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className='tech-icons'>
                      {project.usedTech.map((icon, i) =>(
                        <img className='tech-icon' src={icon} alt='tech icon'  key={i} />
                      ))}
                    </div>
                    <div className='project-buttons'>
                        <div>
                          <a href={project.github} rel="noreferrer" target='_blank' className='project-button'>Github</a><FiGithub />
                        </div>
                        <div>
                          <a href={project.deployed} rel="noreferrer" target='_blank' className='project-button'>Live</a><FiExternalLink />
                        </div>
                    </div>
                   
                  </div>
                  <img src={project.image} alt={project.alt} className='project-image'/>
                </div>
              ))}
              </div>
          </main>

          <section className='contact'>
            <h2 >Get in touch</h2>
            <Form />
          </section>

      </>
    )
}

export default MainContent
