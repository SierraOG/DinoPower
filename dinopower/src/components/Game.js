import React, {useState, useEffect } from 'react';
import Score from './Score';
import Sprite from './Sprite';
import Character from './Character';

export default function Game({gameStarted, gamePaused, gameRestarted}) {
    const [gameOver, setGameOver] = useState(false);
    const [y,setY] = useState(0);
    const [x,setX] = useState(0);

    const handleKeyPress = (event) => {
        switch (event.keyCode) {
            case 37:
                console.log('left');
                setX(x => (x-10));
                break;
            case 38:
                console.log('up');
                setY(y => (y-10));
                break;
            case 39:
                console.log('right');
                setX(x => (x+10));
                break;
            case 40:
                console.log('down');
                setY(y => (y+10));
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
            <div className="GameCanvas">
                <Character x = {x} y = {y} z = {100} gamePaused = {gamePaused}/>
            </div>
        </div>
    )
}