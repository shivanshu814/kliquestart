import React from 'react'

// import heropic from '../../assets/heropic.png'

function RegForm() {
  return (
    <>
        <section id='RegistrationForm' className='mobilesectionnp'>
          <div className="center">
          <h2>Join Kliquestart</h2>
          <form action="">
            <div className="c1">
            <input type="text" name="Name" id="" placeholder='Full Name'/>
            <input type="email" name="Email" id="" placeholder='Enter Email Address'/>
            <input type="tel" name="Phone" id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Enter Phone Number' />
            <input type="text" name="Inst" id="" placeholder='Institute Name (College/School)' />
            <div className="loc">
            <input type="text" name='City' placeholder='City' />
            <input type="text" name='State' placeholder='State' />
            </div>
            <input type="text" name='City' placeholder='Zip Code' />
            </div>
            <div className="c2">
            <textarea name="idea" id="Idea" cols="1000" rows="15" placeholder='Describe Your Startup Idea'>
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