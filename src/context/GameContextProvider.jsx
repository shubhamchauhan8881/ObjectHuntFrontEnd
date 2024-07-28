import React,{useState} from 'react'
import GameContext from './GameContext';

export default function GameContextProvider({children}) {
    const [musicVol, setMusicVol] = useState(25);
    const [TouchmusicVol, setTouchMusicVol] = useState(25);

    const context = {
        musicVol,
        setMusicVol,
        TouchmusicVol,
        setTouchMusicVol,
    }
  return (
    <>
        <GameContext.Provider value={context}>
            {children}
        </GameContext.Provider>
    </>
  )
}
