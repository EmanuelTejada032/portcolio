import React from 'react'
import { MenuItems } from '../Navbar/MenuItems'
import './styles.css'

const Footer = () => {
    return (
        <div className='footer'>
                <ul>
                   {MenuItems.map( (item, id) => (
                       <li key={id}><a href={item.url}>{item.title}</a></li>
                   ))}
                </ul>
        </div>
    )
}

export default Footer
