/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoWhite.png';
// import Logo from '../../assets/Brochure.pdf';
// import React, { useRef } from 'react';
function Header() {
	return (
		<nav>
			<a href='/' className='logo'>
				{/* <div className="logo"> */}
				<img src={Logo} alt='' />
				<h2>KliqueStart</h2>

				{/* </div> */}
			</a>
			<a href='/' className='UpdatedLogo'>
				{/* <div className="logo"> */}

				<h5>A Klique over Ordinary</h5>

				{/* </div> */}
			</a>

			<ul className='menu'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link
					onClick={() => {
						const anchor = document.querySelector('#whyus');
						anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
					}}>
					<li>About Us</li>
				</Link>
				<Link
					onClick={() => {
						const anchor = document.querySelector('#whatwedo');
						anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
					}}>
					<li>Our Services</li>
				</Link>
				<Link
					onClick={() => {
						const anchor = document.querySelector('#contactus');
						anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
					}}>
					<li>Contact Us</li>
				</Link>
				&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;
				<a href='Brochure.pdf' download='Brochure.pdf'>
					<button id='nav2btn'>Brochure</button>
				</a>
			</ul>
		</nav>
	);
}

export default Header;
