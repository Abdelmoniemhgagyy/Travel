import React from 'react'
import Topfooter from "./Topfooter"
import Bottomfooter from "./Bottomfooter"
import "./Footer.css"
import video from "./1135820633.mp4"
function Footer() {
  const scrollTop =()=>{
    window.scroll({
      top:0,
      behavior:'smooth',
    })
  }
  return (
    <div className='footer'>
      <video src={video} autoPlay loop muted className='footer-background'></video>
    <Topfooter/>
    <Bottomfooter scrollTop={scrollTop}/>
    </div>
  )
}

export default Footer