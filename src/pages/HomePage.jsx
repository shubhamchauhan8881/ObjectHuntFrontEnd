import React from 'react'
import './HomePage.css';
export default function HomePage() {
  return (
    <div className='h-screen max-w-md bg-[#2C3E50] mx-auto flex flex-col justify-evenly items-center'>
      <div className='flex flex-col justify-evenly items-center'>
        <img src='public\ObjHuntLogo.png' alt='Object Hunt Logo' className='logo' />
        <h1 className='text-3xl font-bold text-[#87CEEB]'>OBJECT HUNT</h1>
      </div>
      <div>
        <button className='btn block btn-wide bg-[#F39C12] btn-primary mt-5'>PLAY AS GUEST</button>
        <button className='btn block btn-wide mt-5'>HOW TO PLAY</button>
      </div>
      <footer className='flex flex-col items-center justify-content-center m-30 p-4'>
      <div>Made with <span className="text-red-500 animate-heartbeat">❤️</span> </div>
      <span> @ 2024 </span>
      </footer>
      
    </div>
  )
}
