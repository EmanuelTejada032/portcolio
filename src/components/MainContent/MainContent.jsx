import React from 'react'
import background from '../../img/herobgtest.jpg'
const MainContent = () => {
    return (
      <>
        <div className="hero-section" style={{backgroundImage: `url(${background})`, backgroundPosition: 'center'}} >
          <div className="hero-heading">
            <h2>I'm Emanuel Tejada</h2>
            <h4>I'm a web developer</h4>
          </div>
        </div>
        <div className="about-section">
          <div className="about-content">
            <h2>About Me</h2>
            <p>Hi! My name is Emanuel and I'm currently a software developer graduated from ITSC, I'm also a selft taugth web developer. Learning to code has been dificult journey, however I keep putting effort and dedicating time every day  learning to code and become a better web developer and improving my problem solving skills to be able to understand and work with backend technolgies in the web development industry and taking my web design knowledge next level to bring value to any future employer or customer that I could have. I like to work in both front-end and backend development process for websites applications. Even if it's difficult learning to code, I belive in my habilities to learn and keep going this road much further</p>
          </div>
        </div>
      </>
    )
}

export default MainContent
