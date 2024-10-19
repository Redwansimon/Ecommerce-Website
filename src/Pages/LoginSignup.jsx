import React from 'react'
import './css/loginsignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Your Email'/>
          <input type="email"placeholder='Email Address' />
          <input type="password"placeholder='Passeord' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have an Account?<span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing , I agree to the terms of use & privacy policy</p>
      </div>
      </div>


    </div>
  )
}
