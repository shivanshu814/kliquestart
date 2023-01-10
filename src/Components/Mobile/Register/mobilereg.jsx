import React from 'react'
import './mobilereg.css'

// import heropic from '../../assets/heropic.png'

function MobileReg() {
  return (
    <>
        <section id='RegistrationForm' className='zp'>
          <div className="m_center">
          <h2>Join Kliquestart</h2>
          <form action="https://formsubmit.co/kliquestart@gmail.com" method="POST" id='mobileForm'>
            <div className="m_c1">
                <input type="text" name="name" id="" placeholder='Full Name'/>
                <input type="email" name="email" id="" placeholder='Enter Email Address'/>
                <input type="tel" name="phone" id="" placeholder='Enter Phone Number' />
                <input type="text" name="college" id="" placeholder='Institute Name (College/School)' />
                <div className="m_loc">
                    <input type="text" name='city' placeholder='City' />
                    <input type="text" name='state' placeholder='State' />
                </div>
                <input type="text" name='zip_code' placeholder='Zip Code' />
                <textarea name="idea" id="idea" cols="1000" rows="15" placeholder='Describe Your Startup Idea'></textarea>
                <button>Register Now</button>
            </div>
                
          </form>
          </div>
        </section>
    </>
  )
}

export default MobileReg