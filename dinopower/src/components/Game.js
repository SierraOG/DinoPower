import React, {useState, useEffect } from 'react';
import Score from './Score';

export default function Game({gameStarted, gamePaused, gameRestarted}) {
    const [gameOver, setGameOver] = useState(false);

    const handleKeyPress = (event) => {
        switch (event.keyCode) {
            case 37:
                console.log('left');
                break;
            case 38:
                console.log('up');
                break;
            case 39:
                console.log('right');
                break;
            case 40:
                console.log('down');
                break;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
    
        return () => {
          document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, []);

    return(
        <div className="Game">
            <Score gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted}/>
            <svg width="60vw" height="60vh" className="GameCanvas">
                <rect x="0" y="0" width="100%" height="100%"/>
            </svg>
        </div>
    )
}