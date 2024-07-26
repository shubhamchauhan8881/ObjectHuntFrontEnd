import React from 'react'

export default function HomePage() {
  return (
    <div className='h-screen max-w-md bg-yellow-600 mx-auto flex flex-col justify-evenly items-center'>
        <div>icon</div>
        <div>
            <button className='btn block btn-wide btn-primary mt-5'>Btn 1</button>
            <button className='btn block btn-wide btn-primary mt-5'>Btn 2</button>
        </div>
        <div >version</div>
    </div>
  )
}
