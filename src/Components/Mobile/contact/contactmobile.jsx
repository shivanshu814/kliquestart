/** @format */

import React from 'react';
import './contact_mobile.css';

// local imports
import Twitter from '../../../assets/Twitter.png';
import Linkedin from '../../../assets/Linkedin.png';
import Instagram from '../../../assets/Instagram.png';
import Youtube from '../../../assets/youtube-square-color-icon.png';

function MobileContact() {
	return (
		<>
			<section id='contactus_m' className='mobilesection'>
				<div className='contact-flex_m'>
					<div className='phonemail_m'>
						<h1>Contact Us</h1>
						<p>
							Phone: <a href='tel:+91 9555048041'>+91 9555048041</a>
						</p>
						<p>
							Email:{' '}
							<a href='mailto:contact@kliquestart.com'>
								contact@kliquestart.com
							</a>
						</p>
						<p>Address: Dhankawadi, Katraj, Pune 411043</p>
					</div>
					<div className='social_m'>
						<a href='https://twitter.com/KliqueStart'>
							<img src={Twitter} alt='' />
						</a>
						<a href='https://www.linkedin.com/company/kliquestart/'>
							<img src={Linkedin} alt='' />
						</a>
						<a href='https://www.instagram.com/kliquestart/'>
							<img src={Instagram} alt='' />
						</a>
						<a href='https://youtu.be/f-wdROS936c'>
							<img src={Youtube} alt='' />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default MobileContact;
