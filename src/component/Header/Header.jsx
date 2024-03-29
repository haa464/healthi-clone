import React from 'react'
import './header.css'
import Logo from '../../assets/color_logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className='hreader_cnt'>
        <div className="header_design">
            <div className="container_des">
                <div className="header_logo">
                    <a href='/'>
                        <img src={Logo} alt='logo' />
                    </a>
                </div>

                <ul className="app__navbar-links">
                    <li className="p__opensans"><a href="">App</a></li>
                    <li className="p__opensans"><a href="">Community</a></li>
                    <li className="p__opensans"><a href="">shop <MdOutlineShoppingCart /></a>  </li>
                    <a href="#login" className="left_btn">Log In</a>
                    <a href="/" className="right_btn">Sign Up</a>
                </ul>

                <div className="app__navbar-smallscreen">
                    <GiHamburgerMenu color="#000000" fontSize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>App</a></li>
                        <li><a href="#about" onClick={() => setToggleMenu(false)}>Community</a></li>
                        <li><a href="#menu" onClick={() => setToggleMenu(false)}>shop</a></li>
                        
                        </ul>
                    </div>
                    )}
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Header
