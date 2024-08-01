import React,{useState} from 'react'
import GameContext from './GameContext';

export default function GameContextProvider({children}) {
    const [musicVol, setMusicVol] = useState(0);
    const [musicPlay, setMusciPlay] = useState(false);

    const [TouchmusicVol, setTouchMusicVol] = useState(0);
    const [loading, setLoading] = useState(false);

    const context = {
        musicVol,
        setMusicVol,
        TouchmusicVol,
        setTouchMusicVol,
        musicPlay, setMusciPlay,
        loading, setLoading
    }
  return (
    <>
        <GameContext.Provider value={context}>
            {children}
        </GameContext.Provider>
    </>
  )
}
