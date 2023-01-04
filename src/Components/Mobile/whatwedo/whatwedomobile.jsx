import React from 'react'

import Icon from '../../../assets/Icon.png'
import './what.css'

function WhatwedoMobile() {
  return (
    <>
        <section id='whatwedo-mobile' className='mobilesection'>
        <div className="center">
            <h1>What we do?</h1>
        </div>
        <div className="grid-container">
            <div className="mentorship grid-item">
                <img src={Icon} alt="" />
                <h4>Mentorship</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
            <div className="networking grid-item">
                <img src={Icon} alt="" />
                <h4>Networking</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
            <div className="marketing grid-item">
                <img src={Icon} alt="" />
                <h4>Marketing & Publicity</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
            <div className="team grid-item">
                <img src={Icon} alt="" />
                <h4>Team Building</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
            <div className="legal grid-item">
                <img src={Icon} alt="" />
                <h4>Legal Advisory</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
            <div className="more grid-item">
                <img src={Icon} alt="" />
                <h4>And Much More</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
        </div>
        </section>
    </>
  )
}

export default WhatwedoMobile