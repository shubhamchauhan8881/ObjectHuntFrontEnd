import {Outlet} from "react-router-dom";
import PopUp from "./components/PopUp";
import SettingsButton from "./components/SettingsButton";
import Loader from "./components/Loader";
import { useContext, useEffect, useRef } from "react";
import GameContext from "./context/GameContext";

import bgAudio from './assets/gameaudio.mp3';

export const Layout = () => {
    const {loading , musicVol, musicPlay} = useContext(GameContext)
    
    const audio = useRef()
    audio.current?.setAttribute('loop', true)
    audio.current?.setAttribute('autoplay', true)
    audio.current?.setAttribute('muted', true)


    useEffect(() =>{
        console.log(musicPlay)
        if(musicPlay){
            audio.current.volume = musicVol/100;
            audio.current?.play();
            
        }else{
            audio.current?.pause();
        }
    }, [audio, musicPlay, musicVol])

    return (
        <div className="relative h-screen w-full sm:max-w-md mx-auto">
            <Outlet />
        

            {/* opop */}
            <PopUp/>
            <SettingsButton/>
            { loading && <Loader/> }
            <audio src={bgAudio} ref={audio} hidden></audio>
        </div>
    )
}
