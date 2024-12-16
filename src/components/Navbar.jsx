import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { HiHeart } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-100 fixed top-0 left-0 right-0 z-10">
      <div className="text-3xl font-bold">
        Fashion
      </div>
      <div className="relative w-4/5 mx-4">
        <BiSearch 
          className="absolute left-4 top-1/2 transform -translate-y-1/2" 
          size={20} 
        />
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className="bg-white w-full p-4 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className='flex flex-row gap-6'>
        <CgShoppingCart size={30} />
        <HiHeart size={30} />
        <div>

        </div>
      </div>
      
    </nav>
  )
}

export default Navbar