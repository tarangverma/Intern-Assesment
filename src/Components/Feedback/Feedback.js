import React, { useState } from 'react'
import "./Feedback.css"
import People from "./Peoples"

function Feedback() {
  
  

    

  return (
    <div className='feedback'>
        <div className='f-1'>They<span> ❤ </span>Us</div>
        <div className='f-2'>😃👍❤</div>
        <div className='slideshow'>
        <div className='slideshowSlider'></div>    
        {People.map((person , index) => {
            <div className='slide'>
                key={index}
                <p>{person.para}</p>
                <div className='people'>{person.name}</div>
            <div className='Imgg'></div>
            </div>       
        })}    
        </div>
    </div>
  )
}

export default Feedback