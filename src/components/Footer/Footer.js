import React from 'react'
import { MenuItems } from '../Navbar/MenuItems'
import { Link} from "react-scroll";
import './styles.css'

const Footer = () => {
    
    return (
        <div className='footer'>
                <ul>
                   {MenuItems.map( (item, id) => (
                       <li key={id} ><Link  spy={true}
                       smooth={true}
                       offset={item.url === 'about'? 1 : -120}
                       duration={800} 
                       activeClass='active' 
                       to={item.url}>{item.title}</Link></li>
                   ))}
                </ul>
        </div>
    )
}

export default Footer
