import React from 'react'

// local imports
import Twitter from '../../assets/Twitter.png'
import Linkedin from '../../assets/Linkedin.png'
import Instagram from '../../assets/Instagram.png'

function Why() {
  return (
    <>
        <section id='contactus'>
        <div class="contact-flex">
            <div class="phonemail">
            <h1>Contact Us</h1>
                <p>Phone: <a href="tel:+919555048041">919555048041</a></p>
                <p>Email: <a href="mailto:contact@kliquestart.com">contact@kliquestart.com</a></p>
            </div>
            <div class="social">
              <a href="https://twitter.com/KliqueStart"><img src={Twitter} alt="" /></a>
              <a href="https://www.linkedin.com/company/kliquestart/"><img src={Linkedin} alt="" /></a>
              <a href="https://www.instagram.com/kliquestart/"><img src={Instagram} alt="" /></a>
            </div>
        </div>
        </section>
    </>
  )
}

export default Why