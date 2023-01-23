/** @format */

import React from 'react';
import './herostyle.css';

import { Link } from 'react-router-dom';

// import heropic from '../../assets/heropic.png'

function Mobilehero() {
	return (
		<>
			<section id='mobilehero' className='mobilesection'>
				<div className='text'>
					<h1>
						Learn about <br /> startups
					</h1>
					<p className='nuito'>
						{' '}
						Start-ups are companies or ventures that are focused on a single
						product or service that the founders want to bring to market. Here
						on KliqueStart you can learn everything about how to turn your idea
						into a flourishing start up. You can talk to mentors which have been
						in this field for many years. Inspire from their life changing
						advises and transform yourself to a self-made entrepreneur with our
						help. <br />
					</p>
					<Link to='/register'>
						<button>Register Now</button>
					</Link>
				</div>
				{/* <div className="img">
            <img src={heropic} alt="" />
          </div> */}
			</section>
		</>
	);
}

export default Mobilehero;
