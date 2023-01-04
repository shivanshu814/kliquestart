import React from 'react'
import Logo from "../../assets/LogoWhite.png";

function Header() {
  return (
    <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>KliqueStart</h2>
            </div>
            <ul className="menu">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Our Services</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <button>Register Now</button>
    </nav>
  )
}

export default Header