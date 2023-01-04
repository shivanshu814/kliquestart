import React from 'react'

// import heropic from '../../assets/heropic.png'

function RegForm() {
  return (
    <>
        <section id='RegistrationForm' className='mobilesection'>
          <h2>Join Kliquestart</h2>
          <form action="">
            <div className="c1">
            <input type="text" name="Name" id="" placeholder='Full Name'/>
            <input type="email" name="Email" id="" placeholder='Enter Email Address'/>
            <input type="tel" name="Phone" id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Enter Phone Number' />
            </div>
            <div className="c2">
              <input type="url" name="" id="" />
            </div>
          </form>
        </section>
    </>
  )
}

export default RegForm