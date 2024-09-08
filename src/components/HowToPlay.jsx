import React from 'react'

export default function HowToPlay() {
  return (
    <div className='text-black'>
        <h1 className='font-bold mb-2 text-xl'>How To Play</h1>
        <ul>
            <li>
                <span className='font-semibold'>Register: </span> Players need to register first.
            </li>

            <li>
                <span className='font-semibold'>Login: </span> After successful registration, player need to login.
            </li>

            <li>
                <span className='font-semibold'>Play: </span> You can either play single or multiple players by creating rooms and sharing the code with you friends.
            </li>

            <li>
                <span className='font-semibold'>Game: </span> During the match players are prompted with some objects they need to go and fetch the same. After that they need to click picture of that (verify proper lightning). If the object in picture matches with prompted object, player will be rewarded with points (sooner the submission more points you gain).
            </li>

        </ul>
    </div>
  )
}
