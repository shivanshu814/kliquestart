import React from 'react'
import './why.css'

import WhyKlique from './../../../assets/WhyKlique.mp4'
import WhyKliqueImg from './../../../assets/WhyKlique.png'

function Mobilewhy() {
  return (
    <>
        <section id='mobilewhy' className='mobilesection'>
        <h1>Why KliqueStart is the best choice?</h1 >
        <p className='nuito'>Watch this one minuite video to find out why you should join us</p>
        <video
    id="my-video-mb"
    class="video-js"
    controls
    preload="auto"
    poster={WhyKliqueImg}
    data-setup="{}"
  >
    <source src={WhyKlique} type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
        </section>
    </>
  )
}

export default Mobilewhy