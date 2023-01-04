import React from 'react'
import './herostyle.css'

// import heropic from '../../assets/heropic.png'

function Mobilehero() {
  return (
    <>
        <section id='mobilehero' className='mobilesection'>
          <div className="text">
          <h1>Learn about <br /> startups</h1>
        <p className="nuito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illum. Labore dolores
            tempora id optio
            doloribus? Numquam, adipisci. Nesciunt dolorum ipsam enim, quo laborum iusto. Deserunt sequi magni
            modi
            ex.
        </p>
        <button>Register Now</button>
          </div>
          {/* <div className="img">
            <img src={heropic} alt="" />
          </div> */}
        
        </section>
    </>
  )
}

export default Mobilehero