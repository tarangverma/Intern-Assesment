import React, { useEffect, useState } from 'react'
import "./Feedback.css"
import People from "./Peoples"

function Feedback() {
 const [index , setIndex] = useState(0); 
  const delay = 2500;
 useEffect(() => {
  setTimeout(
    () =>
      setIndex((prevIndex) =>
        prevIndex === People.length - 1 ? 0 : prevIndex + 1
      ),
    delay
  );

  return () => {};
}, [index]);
  return (
    <div className='feedback'>
        <div className='f-1'>They<span> ❤ </span>Us</div>
        <div className='f-2'>😃👍❤</div>
        <div className='slideshow'>
        <div className='slideshowSlider'
        style={{ transform: `translate3d(0 , ${ -index * 100}% , 0)` }}>
        {People.map((person , index) => {
          return (
            <div className='slide'>
                <div key={index} className='paragraph'><p>{person.para}</p></div>
                <div key={index} className='people'>- {person.name}</div>
                <div key={index} className='Imgg'><img src={person.photoUrl} alt="mm"></img></div>
            </div>
          )       
        })}    
        </div>    
        </div>
    </div>
  )
}

export default Feedback