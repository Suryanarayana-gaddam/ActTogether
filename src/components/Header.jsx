import React, { useState } from 'react'
import logo from "../assets/image.png";
import {BiCross, BiSearch} from "react-icons/bi"
import {FaBarsStaggered, FaX} from "react-icons/fa6"
import "./header.css"
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className='header flex justify-between px-6 pt-3'>
      <div className='relative bottom-2 lg:left-2 right-1'>
        <FaBarsStaggered onClick={() => setMenuOpen(true)} className={`${menuOpen ? "hidden" : "block"} text-white cursor-pointer sm:hidden absolute left-[-13px] top-[18px]`}/>
        <span className={`${menuOpen ? "block" : "hidden"} text-black w-36 z-50 h-7 sm:hidden absolute left-[-20px] p-1 bg-amber-300`}>
          <FaX onClick={() => setMenuOpen(false)} className={`cursor-pointer absolute right-2`}/>
        </span>
        <div className={`${menuOpen ? "block" : "hidden"} z-50 smallMenu rounded absolute top-6 left-[-20px] bg-amber-300 p-[3px] w-36`}>
            <div>Home</div>
            <div>Events</div>
            <div>Menu</div>
            <div>Logout</div>
        </div>
        <p className='text-[#ffffff] font-bold imgText text-xs md:text-base relative left-2'><img src={logo} alt="Logo" className='w-[40px] md:w-[55px] rounded border-none relative left-4 md:left-5'/>ActTogether</p>
      </div>
      <div>
        <div className='flex relative lg:bottom-1 right-3 justify-center'>
            <input type="search" name='search' className='border-2 w-[190px] sm:w-[180px] md:w-[300px] lg:w-[407px] border-gray-600 px-2 py-1 outline-none rounded-s-full text-black'/>
            <span className='absolute right-[-33px] md:right-0 top-0 border-2 bg-amber-400 text-gray-800 hover:text-gray-500 cursor-pointer border-gray-600 border-l-2 w-10 text-2xl h-[36px] grid justify-center duration-700  place-items-center hover:bg-white rounded-e-full'><BiSearch className='hover:animate-bounce absolute'/></span>
        </div>
        <div className='hidden sm:flex duration-1000 gap-10 sm:gap-12 md:gap-14 lg:gap-32 font-bold text-gray-300 menu '>
            <div>Home</div>
            <div>Events</div>
            <div>Menu</div>
            <div>Menu</div>
        </div>
      </div>
      <div className='flex justify-between relative top-2 gap-2'>
        {/* <button type='button' className='border-2 text-black duration-500 border-gray-500 w-24 h-8 bg-gray-300 hover:bg-white hover:text-gray-500 font-bold rounded'>Sign Up</button>
        <button type='button' className='border-2 text-black duration-500 border-gray-500 w-24 h-8 bg-gray-300 hover:bg-white hover:text-gray-500 font-bold rounded'>Login</button> */}
        <FaBarsStaggered className='relative left-3 text-white'/>
      </div>
    </div>
  )
}

export default Header
