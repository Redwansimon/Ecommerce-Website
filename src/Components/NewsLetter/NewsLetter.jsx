import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newletter andstay updated</p>
        <div>
            <input type="email" placeholder='Youer Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
