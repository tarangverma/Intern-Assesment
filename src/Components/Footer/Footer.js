import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='upper'>
          <div className='c1'>
            <div className='logo'><img src='https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg'></img></div>
            <div className='lines1'>We’re a small crew of locals and Andaman-lovers helping you make the most of your trip to the Andamans.<p></p></div>
            <div className='lines2'><p>You can build your holiday from the ground-up, exactly how you like. We’ve personally verified each experience, so you know that they’re tried, tested and true!</p></div>
            <a className='green-l' href='#'>Find Out How</a>
          </div>
          <div className='c2'>
            <div className='m2'>
                <ul>
                <li><div className='m1'><h1>GO2ANDAMAN.COM</h1></div></li>
                <li><a className='black-l' href='#'>About Us</a></li>
                <li><a className='black-l' href='#'>Jobs at Go2Andaman</a></li>
                <li><a className='black-l' href='#'>Travel Blog</a></li>
                <li><a className='black-l' href='#'>Influencers & Brands</a></li>
                <li><a className='black-l' href='#'>GO2ANDAMAN Reviews</a></li>
                </ul>
            </div>
          </div>
          <div className='c3'>
            <div className='m2'>
                <ul>
                <li><div className='m1'><h1>FOR TRAVELLERS</h1></div></li>
                <li><a className='black-l' href='#'>Contact Us</a></li>  
                <li><a className='black-l' href='#'>Refunds & Cancellation</a></li> 
                <li><a className='black-l' href='#'>Terms of Service</a></li>  
                <li><a className='black-l' href='#'>Content Disclaimer</a> </li> 
                <li><a className='black-l' href='#'>Privacy Policy</a></li> 
                </ul>
          </div> 
        </div>
          <div className='c4'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/12/startupindia-01.svg?compress=true&quality=90&w=200&dpr=1.3'></img></div> 
    </div>
        <div className='lower'>
          <div className='border'></div>
          <div className='socials'>
            <div>WEBPORT MEDIA PVT LTD | CIN No: U63040AN2015PTC000278</div>
            <div className='social1'>
              <div className='social2'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/instagram.png?compress=true&quality=90&w=240&dpr=1.3'></img></div>
              <div className='facebook'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/facebook.png?compress=true&quality=90&w=240&dpr=1.3'></img></div>
              <div className='social2'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/pinterest.png?compress=true&quality=90&w=240&dpr=1.3'></img></div>
              <div className='social2'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/linkedin.png?compress=true&quality=90&w=240&dpr=1.3'></img></div>
              <div className='social2'><img src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/twitter.png?compress=true&quality=90&w=240&dpr=1.3'></img></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer