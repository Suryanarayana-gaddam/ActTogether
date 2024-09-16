import React from 'react'
import logo from "../assets/react.svg";
import {BiSearch} from "react-icons/bi"
import "./header.css"
const Header = () => {
  return (
    <div className=' flex justify-between px-6 border-2 border-green-500 p-2 text-green-500'>
      <div>
        <p className='border border-green-500 p-3'><img src={logo} alt="Logo" /></p>
      </div>
      <div>
        <div className='relative bottom-1'>
            <input type="search" name='search' className='border-2 w-[150px] lg:w-[350px] border-green-600 px-2 py-1 outline-none rounded-sm text-black'/>
            <span className='absolute right-[-39px] top-0 border-2 bg-green-500 text-gray-800 hover:text-green-500 cursor-pointer border-green-600 border-l-0 w-10 text-2xl h-[36px] grid justify-center duration-700  place-items-center hover:bg-white rounded-sm'><BiSearch className='hover:animate-bounce'/></span>
        </div>
        <div className='flex justify-between mt-1 font-bold menu'>
            <div>Home</div>
            <div>Events</div>
            <div>Menu</div>
            <div>Menu</div>
        </div>
      </div>
      <div className='flex justify-between relative top-2 gap-2'>
        <button type='button' className='border-2 text-black duration-500 border-green-500 w-24 h-8 bg-lime-300 hover:bg-white hover:text-green-500 font-bold rounded'>Sign Up</button>
        <button type='button' className='border-2 text-black duration-500 border-green-500 w-24 h-8 bg-lime-300 hover:bg-white hover:text-green-500 font-bold rounded'>Login</button>
      </div>
    </div>
  )
}

export default Header
