import React from 'react'
import './mobilefooter.css'

// import heropic from '../../assets/heropic.png'

function MobileFooter() {
  return (
    <>
        <div className="mobile-footer">
            <div className="foot-brand">
                <h2>Kliquestart</h2>
            </div>
            <div className="links nuito">
                <a href="http://">Support</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms and Conditions</a>
            </div>
            <div className="copyright nuito">
            © 2023 Kliquestart, All Rights Reserved
            </div>
        </div>
    </>
  )
}

export default MobileFooter