import React from 'react'
import './herostyle.css'

// import heropic from '../../assets/heropic.png'

function Mobilehero() {
  return (
    <>
        <section id='mobilehero' className='mobilesection'>
          <div className="text">
          <h1>Learn about <br /> startups</h1>
        <p className="nuito">Start-ups are companies or ventures that are focused on a single product or service that the founders want to bring to market. These companies typically don't have a fully developed business model and, more crucially, lack adequate capital to move on to the next phase of business. Most of these companies are initially funded by their founders. <br />
 
 Start-ups can use seed capital to invest in research and develop their business plans. Market research helps determine the demand for a product or service, while a comprehensive business plan outlines the company's mission statement, vision, and goals, as well as management and marketing strategies. <br />
  
 Here on KliqueStart you can learn everything about how to turn your idea into a flourishing start up. You can talk to mentors which have been in this field for many years. Inspire from their life changing advises and transform yourself to a self-made entrepreneur with our help. <br />
  
 Our goal is to revoke the fear of failure from the mindset of the people who abstain themselves of great start-up ideas which can turn into a whole new venture and help them to flourish in the sector. <br />
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