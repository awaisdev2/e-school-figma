import React from 'react'

import image1 from './media/image1.png'
import image2 from './media/image2.png'
import image3 from './media/image3.png'
import image4 from './media/image4.png'

const AboutCards = (props) => {
    return (
        <div className={`${props.bg} rounded-md flex flex-col items-center justify-center sm:w-72 py-7 m-3`}>
            <img className='h-20' src={props.img} alt="img" />
            <p className='text-[#413960] text-xl font-medium mt-3'>{props.title}</p>
            <p className='text-[#585859] text-base'>Learn Anythings</p>
        </div>
      )
}

const AboutCardsIndex = () => {
  return (
    <div className='block sm:flex sm:justify-center'>
      <AboutCards bg='bg-[#F8FFFB]' img={image1} title='1500+ Topic' />
      <AboutCards bg='bg-[white] shadow-xl' img={image2} title='1800+ Students' />
      <AboutCards bg='bg-[#F8FFFB]' img={image3} title='9K+ Test Token' />
      <AboutCards bg='bg-[#F8FFFB]' img={image4} title='2000+ Student' />
    </div>
  )
}

export default AboutCardsIndex
