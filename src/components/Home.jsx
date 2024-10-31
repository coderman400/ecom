import React from 'react'
import Hero from './Hero.jsx'

const Home = () => {
  return (
    <div className='mt-10 p-4 m-4 flex justify-center items-center flex-col '>
        <Hero />
        <div className='w-4/5 mt-8'>
            <h2 className='font-semibold text-4xl my-4'>New Arrivals</h2>
            <div className='grid grid-cols-4 gap-4'>

            </div>
        </div>
    </div>
  )
}

export default Home