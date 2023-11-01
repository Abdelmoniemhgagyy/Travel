import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  const [list, setList] = useState(false);
  const screenWidth = window.innerWidth;
  return (
   <>
   <nav  style={list&&screenWidth< 870 ? { transform: "translate(-50%, 30%)"}:null}>
   <ul className='navbar'>
          <li onClick={()=> setList(!list)} ><NavLink to="/">Home</NavLink></li>
          <li onClick={()=> setList(!list)} ><NavLink to="/packages">Packages</NavLink></li>
          <li onClick={()=> setList(!list)} ><NavLink to="/shop">Shop</NavLink></li>
          <li onClick={()=> setList(!list)} ><NavLink to="/about">About</NavLink></li>
          <li onClick={()=> setList(!list)} ><NavLink to="/pages">Pages</NavLink></li>
          <li onClick={()=> setList(!list)} ><NavLink to="/news">News</NavLink></li>
          <li onClick={()=> setList(!list)} ><NavLink to="/contact">Contact</NavLink></li>
           <button className='btn-book-now' onClick={()=> setList(!list)} >Book Now</button>
         
        </ul>
      
      </nav>
   {list?<i class="bi bi-x-lg" onClick={()=> setList(!list)}></i>:<i class="bi bi-list" onClick={()=> setList(!list)}></i>}
   </>

   
  )
}

export default Navbar