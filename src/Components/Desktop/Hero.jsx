import React from 'react'
import { Link } from 'react-router-dom';

import heropic from '../../assets/heropic.png'

function Hero() {
  return (
    <>
        <Link to='/register'>
        <button id='navbtn'>Register Now</button> 
        </Link>
        <section id='hero'>
          <div className="text">
            <h1>Learn about <br /> startups</h1>
            <p className="nuito">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Non, illum. Labore dolores
             tempora id optio
             doloribus? <br /> Numquam, adipisci. Nesciunt dolorum ipsam enim, <br /> quo laborum iusto. Deserunt sequi magni
             modi
             ex.
             </p>
             <Link to='/register'>
             <button className='herobtn'>Register Now</button>
             </Link>
          </div>
          <div className="img">
            <img src={heropic} alt="" />
          </div>
        </section>
    </>
  )
}

export default Hero