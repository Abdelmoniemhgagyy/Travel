import React, { useEffect } from 'react'
import video from "./1522131605.mp4"
import Pagination from "./Pagination"
import "./Home.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { Typewriter} from "react-simple-typewriter"
// import ScrollToTop from "react-scroll-to-top"
function Home() {
  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='home'>
      {/* <ScrollToTop smooth top="1000" /> */}
        <video src={video} muted loop autoPlay ></video>

        <div className="home-container">
        <div className="home-info">
        <p className='our-package' data-aos="fade-up"><span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Amazing trips",'Our Package']}
            
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></p>
        <h2 data-aos="fade-up">Search your <span>Holiday</span> 
          </h2>
        </div>
       
        <div className="form-container" data-aos="fade-up">
          <form >
            <div className="label-input">
            <label htmlFor="" >Search Your Destination:</label>
            <div className="input-icon">
             <input type="text" />
             <i class="bi bi-geo-alt-fill"></i>
            </div>
            </div>
            
            <div className="label-input">
            <label htmlFor="">Select Your date : </label>
            <div className="input-icon">
            <input type="date"  />
            </div>
            </div>
            

            <div className="label-input">
              <div className="label-price">
              <label htmlFor="">Max Price : </label>
            <h3 className='max-price'>$5000</h3>
              </div>
         
            <div className="input-icon">
            <input type="range" min="0" max="5000" step="1000"/>
            </div>
            </div>
            
          </form>
          <div className='more-filters btn-book-now' >
          <i class="bi bi-funnel-fill"></i>
            <span>More Fliters</span>
          </div>
        </div>
        <div className="icons-social" data-aos="fade-up">
          <div className="left-icons-social">
          <a href="https://www.linkedin.com/in/abdelmoniem-ahmed-3751761b7/" target=' _blank '>
            <i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/Abdelmoniemhgagyy?tab=projects" target=' _blank '><i className="bi bi-github"></i></a>   
            <a href="https://www.facebook.com/profile.php?id=100007656874900" target=' _blank '><i className="bi bi-facebook"></i></a>
          </div>
          <div className="rigth-icons-social">
          <i class="bi bi-list-ul"></i>
          <i class="bi bi-grid-3x3-gap-fill"></i>
          </div>
        </div>
        </div>
    <Pagination />

    </div>
  )
}

export default Home