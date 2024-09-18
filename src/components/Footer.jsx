import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-neutral-800 text-slate-200 p-3 flex justify-between px-8'>
      <div>2024 <span className='imgText relative right-5'>@ActTogether</span></div>
      <div className='flex justify-between gap-6 place-items-center'>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/">About</Link></p>
        <p><Link to="/">Contact</Link></p>
      </div>
    </div>
  )
}

export default Footer
