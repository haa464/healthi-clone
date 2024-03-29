import React from 'react'
import './header.css'
import Logo from '../../assets/color_logo.svg'

import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
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

                    
            </div>
        </div>
    </div>
  )
}

export default Header