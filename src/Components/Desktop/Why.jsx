/** @format */

import React from 'react';

import WhyKlique from './../../assets/WhyKlique.mp4';
import WhyKliqueImg from './../../assets/WhyKlique.png';

function Why() {
	return (
		<>
			<section id='whyus'>
				<h1>Why KliqueStart?</h1>
				<video
					id='my-video'
					class='video-js'
					controls
					preload='auto'
					poster={WhyKliqueImg}
					data-setup='{}'>
					<source src={WhyKlique} type='video/mp4' />
					<p class='vjs-no-js'>
						To view this video please enable JavaScript, and consider upgrading
						to a web browser that
						<a href='https://videojs.com/html5-video-support/' target='_blank'>
							supports HTML5 video
						</a>
					</p>
				</video>
			</section>
		</>
	);
}

export default Why;
