import { useState } from 'react';
import React from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignIpForm = () => {
        setIsSignInForm(!isSignInForm);

    }
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt ="Logo" />
      </div>
      <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className= 'font-bold text-3xl py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full name' className='p-2 m-2 my-4 w-full bg-gray-700'/>)}
        <input type='text' placeholder='Email or mobile number' className='p-2 m-2 my-4 w-full bg-gray-700'/>
        <input type='text' placeholder='Password' className='p-2 m-2 my-4 w-full bg-gray-700'/>
        <button className='bg-red-600 p-2 m-2 w-full my-4 rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='py-4 p-2 m-2 my-2 cursor-pointer' onClick={toggleSignIpForm}>{isSignInForm? "New to Netflix? Sign up now!" : "Already have an account? Log In"}</p>
      </form>
    </div>
  )
}

export default Login;
