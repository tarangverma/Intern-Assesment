import React from 'react';
import "./Wecare.css";

function Wecare() {
  return (
    <div className='new-box'>
     <h2>We Care.</h2>
     <div className='main-1'>
        <div className='detail-1'>
            <img src='https://ocean.go2andaman.com/wp-content/uploads/2020/12/conversation.svg?compress=true&quality=90&w=200&dpr=1.3' 
            alt="nn" />
            <h3>Customer Happiness</h3>
            <p>We’re delighted to help you. Anything you need, we’re available</p>
        </div>
        <div className='detail-1'>
            <img src='https://ocean.go2andaman.com/wp-content/uploads/2020/12/payment.svg?compress=true&quality=90&w=200&dpr=1.3' 
            alt="nn" />
            <h3>Customer Happiness</h3>
            <p>We take your security seriously. Use our data-protected, user-friendly payment gateway to process payments safely.</p>
        </div>
        <div className='detail-1'>
            <img src='https://ocean.go2andaman.com/wp-content/uploads/2020/12/Page-1.svg?compress=true&quality=90&w=200&dpr=1.3' 
            alt="nn" />
            <h3>Customer Happiness</h3>
            <p>What you see is what you get </p>
        </div>
        <div className='detail-1'>
            <img src='https://ocean.go2andaman.com/wp-content/uploads/2020/12/reliability.svg?compress=true&quality=90&w=200&dpr=1.3' 
            alt="nn" />
            <h3>Customer Happiness</h3>
            <p>Be confident that your trip is set. Get ready for the experience.</p>
        </div>
     </div>
     <div className='cards'>
        <div className='card'>
            <div className='name'>
            <div className='name-1'><h2>Subscribe toMailer</h2></div>
                <div className='photo'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg?compress=true&quality=90&w=128&dpr=1.3'
                alt='mm' /></div>
            </div>
            <div className='details-1'>
            <p>Stay updated with all the excitement that Andamans has to offer</p>
            </div>
            <div className='input'>
              <input type="text" placeholder='Email'></input>
              <button className='btnn'>Subscribe</button>
            </div>
        </div>   
        <div className='card'> 
            <div className='name'>
            <div className='name-1'><h2>Subscribe toMailer</h2></div>
                <div className='photo'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg?compress=true&quality=90&w=128&dpr=1.3'
                alt='mm' /></div>
            </div>
            <div className='details-1'>
            <p>Stay updated with all the excitement that Andamans has to offer</p>
            </div>
            <div>
              
              <button className='btnn'>Subscribe</button>
            </div>
        </div> 
        <div className='card'>   
            <div className='name'>
                <div className='name-1'><h2>Subscribe toMailer</h2></div>
                <div className='photo'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg?compress=true&quality=90&w=128&dpr=1.3'
                alt='mm' /></div>
                
            </div>
            <div className='details-1'> 
            <p>Stay updated with all the excitement that Andamans has to offer</p>
            </div>
            <div>
            
              <button className='btnn'>Subscribe</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Wecare