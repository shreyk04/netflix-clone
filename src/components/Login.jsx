import React, { useState } from 'react'
import Header from './Header'

function Login() {


    const[isSignIn,setIsSignIn]=useState(false);
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <>
        <Header/>
    <div className='flex justify-center'>
        <div className='absolute'>

        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
        </div>
        {
            isSignIn? 
            (
                <form action=""  className='w-1/3 absolute  my-16 flex flex-col  p-8 bg-black opacity-90 gap-6 rounded-sm text-white'>
                <h1 className='text-white text-3xl font-semibold text-left'>Sign In</h1>
                <input type="text" placeholder='Email Address' className='p-2  bg-[#4C4B4B] w-full rounded-sm' />
                <input type="password" placeholder='Password' className='p-2 bg-[#4C4B4B] w-full rounded-sm' />
                <button className='p-2 mt-4 bg-red-600 w-full rounded-sm'>Sign In</button>
                <p className='text-left cursor-pointer' onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
            </form>
            ) :
            <form action=""  className='w-1/3 absolute  my-16 flex flex-col  p-8 bg-black opacity-90 gap-6 rounded-sm text-white'>
            <h1 className='text-white text-3xl font-semibold text-left'>Sign Up</h1>
            <input type="text" placeholder='Name' className='p-2  bg-[#4C4B4B] w-full rounded-sm' />
            <input type="text" placeholder='Email Address' className='p-2  bg-[#4C4B4B] w-full rounded-sm' />
            <input type="password" placeholder='Password' className='p-2 bg-[#4C4B4B] w-full rounded-sm' />
            <button className='p-2 mt-4 bg-red-600 w-full rounded-sm'>Sign Up</button>
            <p className='text-left cursor-pointer' onClick={toggleSignInForm}>Already Registered? Sign In here </p>
        </form>
        }
        
    </div>
    </>


  )
}

export default Login