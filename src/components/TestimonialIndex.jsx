import React from 'react'

import avatar from './media/image8.png'

const TestimonialIndex = () => {
  return (
    <div className='mb-12'>
      <h1 className='text-4xl my-5 sm:my-9 text-center font-bold'>Testimonial</h1>
      <div className='block mx-5 sm:mx-0 sm:flex sm:justify-center sm:items-center'>
        <img className='h-24 mr-9' src={avatar} alt="img" />
        <p className='max-w-xl text-base font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </div>
    </div>
  )
}

export default TestimonialIndex
