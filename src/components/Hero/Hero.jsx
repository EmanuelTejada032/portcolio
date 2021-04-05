import React from 'react'
import background from '../../img/herobgtest.jpg'
const Hero = () => {
    return (
        <div className="hero-section" style={{backgroundImage: `url(${background})`, backgroundPosition: 'center'}} >
          <div className="hero-heading">
            <h2>I'm Emanuel Tejada</h2>
            <h4>I'm a web developer</h4>
          </div>
        </div>
    )
}

export default Hero
