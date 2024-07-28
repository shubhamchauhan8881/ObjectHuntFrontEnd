import React, { useContext } from 'react'
import GameContext from '../context/GameContext'

export default function SettingsPage() {
  const {musicVol ,setMusicVol, TouchmusicVol, setTouchMusicVol} = useContext(GameContext)
  return (
    <div className='flex flex-col gap-8 text-black '>

        <h1 className='text-3xl font-bold font-bungee'>Settings</h1>

        <div>
          <p className='font-bold'>Music Volume</p>
          <input type="range" min={0} max="100" value={musicVol} onChange={(e)=> setMusicVol(e.target.value)} className="range" step="25" />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>

        <div>
          <p className='font-bold'>Touch Sounds</p>
          <input type="range" min={0} max="100" value={TouchmusicVol} onChange={(e)=> setTouchMusicVol(e.target.value)} className="range" step="25" />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      
    </div>

  )
}
