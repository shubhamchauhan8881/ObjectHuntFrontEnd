import React, { useRef } from 'react'


function Camera(){
    return (
        <div className='shrink-0 min-h-96 w-full flex flex-col p-1 gap-1 justify-between bg-secondary rounded-md overflow-hidden '>
            <div className='bg-error grow shrink-0'>camera area</div>

            <div className='flex gap-4'>
                {/* <button className='btn grow btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    Capture
                </button> */}
                <button className='btn grow btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Submit
                </button>
                <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Retake    
                </button>
            </div>
        </div>
    )
}

export default function GamePage() {

    const copytext = useRef()
    const copy = (e)=>{
        copytext.current.textContent = "copied"

        setTimeout(()=>copytext.current.textContent = "copy" , 2000)
    }
  return (
    
    <div className='bg-accent h-full gap-y-1 flex flex-col justify-start items-strech p-1'>
        
        <div className='text-center flex items-center justify-center py-1 px-2 bg-slate-800 rounded-md'>
            
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
        
        <div className='flex justify-between items-center py-1 px-2 bg-slate-800 rounded-md'>
            <p className='text-xl'>Find a <span className='text-secondary font-semibold'>Pen</span></p>
            <p>0s left</p>
        </div>

        <Camera />


        <div className="rounded-md bg-slate-800  p-2 grid h-96">
            <input type="radio" name="my_tabs_2" className="peer/tab1 tab rounded-md checked:bg-primary text-white" aria-label="Chat" defaultChecked/>
            <div className="hidden col-span-2 peer-checked/tab1:block bg-rose-50">tab 1</div>

            <input type="radio" name="my_tabs_2" className="peer/tab2 tab rounded-md checked:bg-primary text-white" aria-label="Leaderboard"  />
            <div className="hidden col-span-2 peer-checked/tab2:block bg-rose-50">tab 2</div>

        </div>

    </div>
  )
}
