import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.png"
function BottomFooter({scrollTop}) {
  return (
    <div className="bottom-footer" data-aos="fade-right">
      <div className="travel-footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Travel</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nisi iusto minima maxime. Alias inventore reiciendis aut assumenda.</p>
      </div>
   
   <div className="right-bottom-footer">
    <div className="right-bottom-footer-item" data-aos="fade-up">
      <h3>our agency</h3>
     <p><i class="bi bi-caret-right"></i> <span>Services</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Insurance</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Agency</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Tourism</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Payment</span></p> 
    </div>
    <div className="right-bottom-footer-item" data-aos="fade-up">
      <h3>partners</h3>
     <p><i class="bi bi-caret-right"></i> <span>Booking</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>RentaiCar</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>HostolWorld</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Trivago</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>TripAdvisor</span></p> 
    </div>
    <div className="right-bottom-footer-item" data-aos="fade-up">
      <h3>last minute</h3>
     <p><i class="bi bi-caret-right"></i> <span>Services</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Insurance</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Agency</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Tourism</span></p> 
     <p><i class="bi bi-caret-right"></i> <span>Payment</span></p> 
    </div>

   </div>

    <div className="footer-copyright" >
      <p>Best travel website </p>
      <div >
       <i className="bi bi-telephone-fill"></i>
        <span>01557221816</span>
       </div>
      <p> &copy; Abdelmoniem Ahmed Hgagy</p>
    </div>
 </div>
    
  )
}

export default BottomFooter