import React, { useContext, useEffect, useRef, useState } from 'react'
import Webcam from "react-webcam";
import axios from 'axios';
import GameContext from '../context/GameContext';
import { useParams } from 'react-router-dom';






function ChatMessage({name, message}){
    return <>
        <p className='py-1 text-sm'>
            <span className='font-semibold text-accent'>{name}</span> : {message}
        </p>
    </>
}


function SendMessage(){
    return (
        <div className='flex my-2'>
            <input type="text"  className='input input-sm grow bg-accent/20' placeholder='message..' />
            <button className='btn btn-sm btn-ghost'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </div>
    )
}

export default function GamePage() {
    
    const {prompt, guestName} = useContext(GameContext)
    const [count, setCount] = useState(30);
    const [board, setBoard] = useState(true);

    const params = useParams();

    
    
    const copytext = useRef()
    const copy = (e)=>{
        copytext.current.textContent = "copied"

        setTimeout(()=>copytext.current.textContent = "copy" , 2000)
    }
   
  return (
    
    <div className='bg-accent/40 h-full gap-y-1 flex flex-col justify-start items-strech'>

        <div className='h-4/6 flex flex-col'>
            <div className='text-center flex items-center justify-center p-2 bg-slate-800'>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p className='text-xl text-secondary font-semibold tracking-[1rem] ms-2'>:23354</p>
                
                <button className='btn btn-xs btn-outline btn-accent text-xs' onClick={copy}>
                    <svg className="size-4" role='button' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    <span ref={copytext}>Copy</span>
                </button>

            </div>
            
            <div className='flex justify-between items-center p-4 bg-slate-800 rounded-b-lg'>
                <p className='text-xl'>Find a <span className='text-secondary font-semibold text-2xl block capitalize'>{prompt}</span></p>
                <div>
                    <span className={count <= 10 ? "countdown text-xl text-error font-semibold" : "countdown text-xl text-accent font-semibold"}>
                        <span style={{"--value":count}}></span>
                    </span>
                    s left
                </div>
            </div>

            {/* <WebcamComponent count={count} /> */}
        </div>


        <div className="rounded-t-lg bg-slate-800 p-2 flex flex-col h-2/6 gap-2">
            <div className='grid grid-cols-2 gap-4'>
                <button onClick={()=>setBoard(()=>false)} className={!board ? "btn btn-sm btn-accent grow" : "btn btn-sm btn-ghost grow"}>Chat</button>
                <button onClick={()=>setBoard(()=>true)} className={board ? "btn btn-sm btn-accent grow" : "btn btn-sm btn-ghost grow"}>Leaderboard</button>
                
            </div>

            {
                !board ? (
                    <div className="grow overflow-y-scroll">
                        <SendMessage />

                        <ChatMessage name="Shubham" message="hii" />
                        <ChatMessage name="Amit" message="hello" />
                        <ChatMessage name="Adarsh" message="I will win this game. HAHA." />
                    </div> 

                ) : (
                    <div id='leaderboard' className="grow overflow-y-scroll">
                        <div className="overflow-x-auto">
                            <table className="table text-xs">
                                <thead>
                                    <tr className='text-accent border-accent/20 hover:bg-accent/20'>
                                        <th className='font-bold text-[13px]'>Rank</th>
                                        <th className='font-bold text-[13px]'>Name</th>
                                        <th className='font-bold text-[13px]'>Score</th>
                                        <th className='font-bold text-[13px]'>Time Taken</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-accent/20 hover:bg-accent/20">
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>30</td>
                                        <td>30s</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }

            
        </div>

    </div>
  )
}
