import React, {Component} from 'react'
import { MenuItems } from './MenuItems'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { Link, animateScroll as scroll} from "react-scroll";
import './styles.css'

class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
       this.setState({ isOpen: !this.state.isOpen})
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render(){
        return (
            <nav className='navbar'>
                <div className='navbar-center'>
                    <h1 className='navbar-logo' onClick={() => this.scrollToTop()}>Port</h1>
                    <ul className={this.state.isOpen? 'navbar-links show' : 'navbar-links'}>
                    {MenuItems.map( (item, id) => (
                        <li key={id} ><Link  spy={true}
                        smooth={true}
                        offset={item.url === 'about'? -80 : -150}
                        duration={800} 
                        activeClass='active' 
                        to={item.url}
                        onClick={this.handleToggle}>{item.title}</Link></li>
                    ))}
                    </ul>
                    {this.state.isOpen? <MdClose className='menu-icon close' onClick={this.handleToggle} /> :
                    <GiHamburgerMenu className='menu-icon' onClick={this.handleToggle} />}
                </div> 
                
            </nav> 
        )
    }
}

export default Navbar;
   
