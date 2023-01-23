/** @format */

import React from 'react';
import './MobileHeader.css';

import Logo from '../../../assets/LogoWhite.png';
import { ReactComponent as Burger } from '../../../assets/svg/Sort.svg';
import SlidingMenu from '../SlidingMenu/slidingmenu';

function MobileHeader() {
	return (
		<>
			<div className='mobileheader'>
				<a href='/' className='logo'>
					<img src={Logo} alt='' />
					<h2>KliqueStart</h2>
				</a>
				{/* <Burger className='burger'/> */}
			</div>
		</>
	);
}

export default MobileHeader;
