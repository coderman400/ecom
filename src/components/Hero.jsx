import React from 'react'
import img1 from '../assets/hero-img-1.jpg'

const Hero = () => {
  return (
    <div className='relative w-10/12 mt-4 flex flex-row'>
            <img className='rounded-2xl w-full h-3/4 object-cover' src={img1}/>
            <div className='absolute top-[20%] left-[5%] font-bold md:text-8xl sm:text-4xl text-gray-100'>Shop authentic.</div>
            <div className='absolute top-[30%] left-[5%] font-bold md:text-6xl sm:text-2xl text-gray-100'>Look good.</div>
    </div>
  )
}

export default Hero