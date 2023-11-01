import React,{useState} from 'react'
import {toursList} from "../../data"
import "./Pagination.css"

function Pagination() {

  const [currentPage,setCurrentPage]=useState(1);
  const tour_per_page = 6;
  const pages = Math.ceil(toursList.length / tour_per_page);
  const startIndex = (currentPage -1)* tour_per_page
  const finishIndex = currentPage* tour_per_page
  const tours = toursList.slice(startIndex,finishIndex);
  
  const numbers_pages =[]
  for(let i =1 ;i<=pages ; i++){
    numbers_pages.push(i)
  }
  return (
    <>
      <h2 className='main-title' data-aos="fade-right" >Most Visited <span>Destination</span></h2>
        <div className="tour-items">
          {tours.map((item)=> 
          <div key={item.id} className='tour-item' data-aos="fade-up" data-aos-duration="1000">
            <img src={item.image} alt="" />
              <div className="tour-info">
                <h3>{item.title}</h3>
                <div className="location-tour">
                <i class="bi bi-geo-alt"></i>
                  <span>{item.location}</span>
                </div>
                <hr />
                <div className="cultural-and-price">
                <div className="cultural">
                  <p>cultural</p>
                  <p>relax <span className='relax-number'>+1</span></p>
                </div>
                <div className="tour-price">${item.priceFrom}</div>
                </div>

                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quisquam placeat</p>
                <div className="item-details">
                        <span>Details</span> 
                        <i class="bi bi-pencil-square"></i>
                        
                </div>
              </div>
         </div>)}
        </div>
        <div className="numbers_of_pages">
          <div className="number_of_page" onClick={()=> setCurrentPage(currentPage>1 ? currentPage-1 : currentPage)}> <i class="bi bi-arrow-left"></i></div>

        {numbers_pages.map((item)=> 
        <div key={item} onClick={()=> setCurrentPage(item)} className={currentPage === item ? "number_of_page active-item":"number_of_page"} >{item}</div>)}

          <div className="number_of_page" onClick={()=> setCurrentPage(currentPage<pages ? currentPage+1 : currentPage)}><i class="bi bi-arrow-right"></i></div>
        
        </div>
   

    </>

  )
}

export default Pagination