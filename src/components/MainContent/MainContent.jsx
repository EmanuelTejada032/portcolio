import React from 'react'
// import background from '../../img/herobgtest.jpg'
// import bootstrapLogo from '../../img/bootstrap-4.svg'

import { SvgLogos, Projects } from '../../data'

const MainContent = () => {

    return (
      <>
        <header>
            <h2>I'm Emanuel Tejada</h2>
            <h4>Web developer</h4>
        </header>
        <section>
          <section className='about'>
          <h2>About Me</h2>
          <p>Hi! My name is Emanuel and I'm currently a software developer graduated from the ITSC, I'm also a self taugth web developer.</p>
          <p>Learning to code has been dificult a journey, however I keep putting effort and dedicating time every day learning new skills  and improving what I already kno to bring value to any future employer or customer that I could have. Even if it's difficult learning to code, I belive in my habilities to learn and keep going this road much further</p>
          </section>
          <section className='skills'>
                   {SvgLogos.map( (logo, i) => (
                     <div key={i} className='skill'>
                       <img  src={logo.url} alt={logo.name} />
                     </div>  
                   ))}
          </section>
          <section className='projects'>   
              {Projects.map( (project, i) => (
                <div key={i} className='project'>
                  <div className='project-info'>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className='tech-icons'>
                      {project.usedTech.map((icon, i) =>(
                        <p className='tech-icon'>this is a tech icon</p>
                      ))}
                    </div>
                    <a href={project.github}>githubButton</a>
                    <a href={project.deployed}>deployedVersionButton</a>
                  </div>
                  <p>image</p>
                </div>
              ))}
          </section>
        </section>
      </>
    )
}

export default MainContent
