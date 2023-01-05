import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../../assets/LogoWhite.png";

function Header() {
  return (
    <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>KliqueStart</h2>
            </div>
            <ul className="menu">
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About Us</li></Link>
              <Link to='/services'><li>Our Services</li></Link>
              <Link to='/contact'><li>Contact Us</li></Link>
            </ul>
    </nav>
  )
}

export default Header