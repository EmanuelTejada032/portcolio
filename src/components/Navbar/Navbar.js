import React, {Component} from 'react'
import { MenuItems } from './MenuItems'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import './styles.css'

class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
       this.setState({ isOpen: !this.state.isOpen})
    }

    render(){
        return (
            <nav className='navbar'>  
                <h1 className='navbar-logo'>Portfolio</h1>
               
                <ul className={this.state.isOpen? 'navbar-links show' : 'navbar-links'}>
                   {MenuItems.map( (item, id) => (
                       <li key={id}><a className="nav-link" href={item.url}>{item.title}</a></li>
                   ))}
                </ul>
                {this.state.isOpen? <MdClose className='menu-icon' onClick={this.handleToggle} /> :
                 <GiHamburgerMenu className='menu-icon' onClick={this.handleToggle} />}
            </nav> 
        )
    }
}

export default Navbar;
   
