import React from 'react'

import Icon from '../../assets/Icon.png'

function Whatwedo() {
  return (
    <>
        <section id='whatwedo'>
        <div className="center">
            <h1>Our Servicess</h1>
        </div>
        <div className="grid-container">
            <div className="mentorship grid-item">
                <img src={Icon} alt="" />
                <h4>Expert guidance and mentorship</h4>
                <p className='nuito'>Our team of experienced mentors and industry experts is here to provide personalized guidance and support every step of the way. We offer one-on-one mentorship to help entrepreneurs develop and refine their ideas, create a solid business plan, and navigate the challenges of starting a business.</p>
            </div>
            <div className="networking grid-item">
                <img src={Icon} alt="" />
                <h4>Training sessions</h4>
                <p className='nuito'>Get the skills and knowledge you need to succeed with our range of training sessions led by industry experts. From market research and validation to business planning and strategy, we've got you covered.</p>
            </div>
            <div className="marketing grid-item">
                <img src={Icon} alt="" />
                <h4>Access to resources</h4>
                <p className='nuito'>We have everything you need to succeed from prototyping resources and tools to market research tools and business planning templates. Plus, our marketing resources will help you effectively reach your target market.</p>
            </div>
            <div className="team grid-item">
                <img src={Icon} alt="" />
                <h4>Networking and events</h4>
                <p className='nuito'>Connect with potential partners and investors at our workshops and industry-specific events. We'll help you make the right connections to take your business to the next level.</p>
            </div>
            <div className="legal grid-item">
                <img src={Icon} alt="" />
                <h4>Marketing and Publicity</h4>
                <p className='nuito'>Once the idea passes through the judgement of the mentors and advice, after reforming into a solid idea, we help you in conducting market research and validate your idea to ensure that they meet the present market needs and wants. We offer workshops and training sessions on market research and customer validation techniques, as well as access to a range of tools and resources.</p>
            </div>
            <div className="more grid-item">
                <img src={Icon} alt="" />
                <h4>Team Building</h4>
                <p className='nuito'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis.</p>
            </div>
        </div>
        </section>
    </>
  )
}

export default Whatwedo