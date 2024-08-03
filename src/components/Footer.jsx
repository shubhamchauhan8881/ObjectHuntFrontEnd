import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-content-center m-30'>
        <div>Crafted with <span className="text-red-500 animate-heartbeat">❤️</span> </div>
        <div className='divider px-8'>By:</div>
        <p className='px-12 text-center font-medium'>Adarsh Kushwaha, Md. Adnan, Prashant Pandey, Shbubham Chauhan, Vinay Kumar, Vishnu Rajbhar</p>
        <Link to="/about">
          <button className="btn btn-outline btn-sm mt-4">About</button>
        </Link>
    </footer>
  )
}
