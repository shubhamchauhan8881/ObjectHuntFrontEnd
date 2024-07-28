import React, { useContext } from 'react'
import logo from '../assets/ObjHuntLogo.png';
import Footer from '../components/Footer';
import PopupContext from '../context/PopupContext';
export default function PlayPage() {


    const {ShowPopUp} = useContext(PopupContext);

  return (
    <div className='bg-accent h-full flex flex-col justify-evenly items-center'>

    <div className='flex flex-col justify-evenly items-center'>
      <img src={logo} alt='Object Hunt Logo' className='logo' />
      <h1 className='text-4xl font-extrabold font-bungee text-black'>OBJECT HUNT</h1>
    </div>
    <div className='flex flex-col gap-4'>
    
        <button  className='btn btn-wide btn-error text-white font-bold text-lg tracking-wider	'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            START
        </button>

        <div className="divider">OR</div>

        <button className='btn btn-primary font-bold text-lg tracking-wider'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Create Room
        </button>

        <button onClick={()=>ShowPopUp("askRoomCode")} className='btn btn-primary font-bold text-lg tracking-wider'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Join Room
        </button>


    </div>

    
    <Footer />
    
  </div>
  )
}
