import React from 'react'

export default function Loader() {
  return (
    <>
        <div class="absolute top-0 left-0 right-0 bottom-0 z-[9999999] bg-black/70 flex-col gap-4 w-full flex items-center justify-center">
            <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
            <p className='text-xl font-bungee text-white'>Loading...</p>
        </div>
    </>
  )
}
