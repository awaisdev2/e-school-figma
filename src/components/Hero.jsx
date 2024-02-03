import React from 'react'

import heroImg from './media/Frame.png'

const Hero = () => {
  return (
    <div className="bg-[#F0FFF0] sm:px-28 px-8 sm:py-12 py-4 block md:flex md:items-center md:justify-between">
      <div className='md:w-1/2 w-full'>
        <p className='text-red-600 mb-3'>Are you ready to Learn?</p>
        <h1 className='md:text-6xl text-3xl font-bold md:max-w-lg w-full'>Learn With fun on <span className='ml-1 text-[#21B573]'>any schedule</span></h1>
        <p className='font-bold sm:max-w-md w-full mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.</p>
        <button style={{boxShadow: '0 3px 10px 0 gray'}} className='bg-[#21B573] px-7 py-2 mt-7 text-white border-2 border-black rounded-3xl'>Get Started</button>
      </div>
      <div className='md:w-1/2 w-full mt-2 sm:mt-0'>
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero
