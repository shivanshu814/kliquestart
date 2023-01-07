import React from 'react'

// import heropic from '../../assets/heropic.png'

function RegForm() {
  return (
    <>
        <section id='RegistrationForm' className='mobilesectionnp'>
          <div className="center">
          <h2>Join Kliquestart</h2>
          <form action="https://formsubmit.co/kliquestart@gmail.com" method="POST">
            <div className="c1">
            <input type="text" name="name" id="" placeholder='Full Name'/>
            <input type="email" name="email" id="" placeholder='Enter Email Address'/>
            <input type="tel" name="phone" id="" placeholder='Enter Phone Number' />
            <input type="text" name="college" id="" placeholder='Institute Name (College/School)' />
            <div className="loc">
            <input type="text" name='city' placeholder='City' />
            <input type="text" name='state' placeholder='State' />
            </div>
            <input type="text" name='zip_code' placeholder='Zip Code' />
            </div>
            <div className="c2">
            <textarea name="idea" id="idea" cols="1000" rows="15" placeholder='Describe Your Startup Idea'>
            </textarea>
            <button>Register Now</button>
            </div>
          </form>
          </div>
        </section>
    </>
  )
}

export default RegForm