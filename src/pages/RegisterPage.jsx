import React, { useContext } from 'react'
import PopupContext from '../context/PopupContext'

export default function RegisterPage() {
    const {ShowPopUp} = useContext(PopupContext)
  return (
      <form className='flex flex-col gap-4 text-black '>
        <div>
          <h1 className='text-3xl font-bold font-bungee'>Register</h1>
          <p>Register yourself to play online with your friends.</p>
        </div>
        
        <div>
          <span>Your Name</span>
          <input
            type="text"
            className="input input-bordered input-seconadary bg-transparent w-full " />
        </div>

        <div>
          <span>Your Email</span>
          <input
            type="text"
            className="input input-bordered input-seconadary bg-transparent w-full " />
        </div>

        <div>
          <span>Your Passoword</span>
          <input
            type="text"
            className="input input-bordered input-seconadary bg-transparent w-full " />
        </div>

        <button className='btn btn-primary font-bold text-lg tracking-wider'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          Submit
        </button>

        <div className="divider">OR</div>
        <button type="button" onClick={()=>ShowPopUp("login")} className='btn btn-md btn-error font-bold text-lg tracking-wider'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          Login
        </button>

      </form>

  )
}
