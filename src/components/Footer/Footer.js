import React from 'react'
import { socialMedias } from '../../data'
import './styles.css'

const Footer = () => {
    
    return (
        <div className='footer'>
                <ul className='footer-links'>
                   {socialMedias.map((socialMedia, i) => (
                    <li key={i}><a href={socialMedia.url} target='_blank' rel="noreferrer">{socialMedia.icon}</a></li>
                   ))}
                </ul>
        </div>
    )
}

export default Footer
