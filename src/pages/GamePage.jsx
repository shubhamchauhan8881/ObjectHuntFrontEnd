import React, { useEffect, useRef, useState } from 'react'
import Webcam from "react-webcam";


const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: "user",
  };
  
const WebcamComponent = () => {
    const [ImageData, setImageData] = useState(null);
    const handleCapture = (getScreenshot) => {
        setImageData(getScreenshot());
    }

 return(
    <div className='w-full flex items-center justify-center flex-col gap-2 grow shrink-0'>
        {!ImageData ? (
            <>
                <Webcam screenshotFormat="image/jpeg" videoConstraints={videoConstraints}>
                    {({ getScreenshot }) => (
                        <button onClick={()=>handleCapture(getScreenshot)} className='btn btn-primary btn-wide'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>
                            Capture
                        </button>
                    )}
                </Webcam>
            </>

        ) : (
            <>
            <img src={ImageData} alt=''/>
            <div className='flex gap-4 justify-center'>
                <button className='btn btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Submit
                </button>
                <button onClick={()=>setImageData(null)} className='btn btn-outline'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Retake    
                </button>                        
            </div>
            </>
        )}

    </div>
    );
}



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

    const [count, setCount] = useState(30);
    const [board, setBoard] = useState(true);
    
    const copytext = useRef()
    const copy = (e)=>{
        copytext.current.textContent = "copied"

        setTimeout(()=>copytext.current.textContent = "copy" , 2000)
    }
    // useEffect(()=>{
    //     const t = setInterval(()=>{
    //         if(count<=0){setCount(30)}
    //         else{
    //             setCount(count=>count-1);
    //         }
    //     }, 1000)

    //     return ()=> clearInterval(t)
    // }, [count]);
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
                <p className='text-xl'>Find a <span className='text-secondary font-semibold text-2xl block'>Notebook</span></p>
                <div>
                    <span className={count <= 10 ? "countdown text-xl text-error font-semibold" : "countdown text-xl text-accent font-semibold"}>
                        <span style={{"--value":count}}></span>
                    </span>
                    s left
                </div>
            </div>

            <WebcamComponent />
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
