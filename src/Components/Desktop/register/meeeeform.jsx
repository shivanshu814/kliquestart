/** @format */

import React from 'react';
import './register.css';
import axios from 'axios';
import { useState } from 'react';
// import heropic from '../../assets/heropic.png'

function RegForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [collegename, setCollegeName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [code, setCode] = useState('');
	const [idea, setIdea] = useState('');

	// submit event
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(name, age, designation, salary);
		// console.log(name, email, phone, collegename, city, state, code, idea);
		// our object to pass
		const data = {
			name,
			email,
			phone,
			collegename,
			city,
			state,
			code,
			idea,
		};
		axios
			.post(
				'https://sheet.best/api/sheets/e3db2bea-977d-4dbc-ab17-5fe828c925ce',
				data
			)
			.then((response) => {
				// console.log(response);
				setName('');
				setEmail('');
				setPhone('');
				setCollegeName('');
				setCity('');
				setState('');
				setCode('');
				setIdea('');
			});
	};
	return (
		<>
			<section id='RegistrationForm' className='mobilesectionnp'>
				<div className='center'>
					<h2>Join Kliquestart</h2>
					{/* <form
						action='https://formsubmit.co/kliquestart@gmail.com'
						method='POST'> */}
					<div className='c1'>
						<input
							type='text'
							name='name'
							id=''
							placeholder='Full Name'
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<input
							type='email'
							name='email'
							id=''
							placeholder='Enter Email Address'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input
							type='tel'
							name='phone'
							id=''
							placeholder='Enter Phone Number'
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
						/>
						<input
							type='text'
							name='college'
							id=''
							placeholder='Institute Name (College/School)'
							onChange={(e) => setCollegeName(e.target.value)}
							value={collegename}
						/>
						<div className='loc'>
							<input
								type='text'
								name='city'
								placeholder='City'
								onChange={(e) => setCity(e.target.value)}
								value={city}
							/>
							<input
								type='text'
								name='state'
								placeholder='State'
								onChange={(e) => setState(e.target.value)}
								value={state}
							/>
						</div>
						<input
							type='text'
							name='zip_code'
							placeholder='Zip Code'
							onChange={(e) => setCode(e.target.value)}
							value={code}
						/>
					</div>
					<div className='c2'>
						<textarea
							name='idea'
							id='idea'
							cols='1000'
							rows='15'
							placeholder='Describe Your Startup Idea'></textarea>
						<button>Submit</button>
					</div>
					{/* </form> */}
				</div>
			</section>
		</>
	);
}

export default RegForm;
