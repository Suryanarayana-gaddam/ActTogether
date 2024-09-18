import React, { useState } from 'react'
import logo from "../assets/img.png";
import {BiCross, BiSearch} from "react-icons/bi"
import {FaBarsStaggered, FaX} from "react-icons/fa6"
import "./header.css"
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  const menu = [
    {link:"Home",path:"/"},
    {link:"Events",path:"/events"},
    {link:"Menu",path:"/shop"},
    {link:"Admin",path: "/admin/Dashboard"},
]
  return (
    <div className='header flex justify-between px-6 pt-3 sm:pb-1 lg:pb-0 h-[50px] sm:h-[58px] md:h-[62px] lg:h-[74px]'>
      <div className='relative bottom-2 lg:left-2 right-1'>
        <FaBarsStaggered onClick={() => setMenuOpen(true)} className={`${menuOpen ? "hidden" : "block"} text-white cursor-pointer sm:hidden absolute left-[-13px] top-[14px]`}/>
        <span className={`${menuOpen ? "block" : "hidden"} text-black w-36 z-50 h-7 sm:hidden absolute left-[-20px] p-1 bg-amber-300`}>
          <FaX onClick={() => setMenuOpen(false)} className={`cursor-pointer absolute right-2`}/>
        </span>
        
        <div className={`${menuOpen ? "block" : "hidden"} z-50 smallMenu rounded absolute top-6 left-[-20px] bg-amber-300 p-[3px] w-36`}>
            {
              menu.map((item,index) => 
                <div key={index}>{item.link}</div>
              )
            }
            <div>Logout</div>
        </div>
        {/* <p className='text-[#ffffff] font-bold imgText text-xs md:text-base relative left-3 sm:top-2 md:top-1 lg:top-[2px] sm:text-sm'>ActTogether</p>*/}
        <img src={logo} alt="Logo" className='w-[52px] sm:w-[64px] md:w-[68px] lg:w-[80px] rounded border-none relative left-3 sm:left-1 top-[-1px] sm:top-[-3px]'/> 
      </div>
      <div className='relative top-[6px] sm:top-[-7px] md:bottom-[6px]'>
        <div className='flex relative bottom-[6px] lg:bottom-1 sm:top-0 right-6 lg:right-5 justify-center'>
            <input type="search" name='search' className='border-2 w-[180px] sm:w-[300px] md:w-[350px] lg:w-[490px] h-7 md:h-[29px] lg:h-8 border-gray-600 px-2 md:px-3 py-1 outline-none rounded-s-full text-black'/>
            <span className='absolute right-[-33px] sm:right-[2px] md:right-1 top-0 border-2 hover:bg-amber-400 hover:text-gray-200 text-black cursor-pointer border-gray-600 border-l-2 w-10 text-xl sm:text-2xl h-7 md:h-[29px] lg:h-8 grid justify-center duration-700  place-items-center bg-amber-300 rounded-e-full'><BiSearch className='hover:animate-bounce absolute'/></span>
        </div>
        <div className='hidden sm:flex sm:mt-0 md:mt-0 lg:mt-[6px] duration-1000 gap-10 sm:gap-16 md:gap-20 lg:gap-32 font-bold text-amber-400 menu '>
            {
              menu.map((item,index) => 
                <div key={index}>{item.link}</div>
              )
            }
        </div>
      </div>
      <div className='flex justify-between relative top-[6px] gap-2'>
        {/* <button type='button' className='border-2 text-black duration-500 border-gray-500 w-24 h-8 bg-gray-300 hover:bg-white hover:text-gray-500 font-bold rounded'>Sign Up</button>
        <button type='button' className='border-2 text-black duration-500 border-gray-500 w-24 h-8 bg-gray-300 hover:bg-white hover:text-gray-500 font-bold rounded'>Login</button> */}
        <FaBarsStaggered className='absolute left-[-3px] sm:text-xl md:text-2xl sm:left-[-20px] bottom-6 text-white'/>
      </div>
    </div>
  )
}

export default Header
