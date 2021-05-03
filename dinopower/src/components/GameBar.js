import React, {useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react'
import Game from './Game';
import Controls from './Controls';

export default function GameBar() {
    const [gameStarted, setGameStarted] = useState(false);
    const [gamePaused, setGamePaused] = useState(false);
    const [gameRestarted, setGameRestarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    function startGame () {
        setGameStarted(true);
        setGameRestarted(false);
    }

    function pauseGame () {
        if (gamePaused) {
            setGamePaused(false);
        }
        else{
            setGamePaused(true);
        }
    }

    function restartGame () {
        setGameStarted(false);
        setGamePaused(false);
        setGameRestarted(true);
    }

    useEffect(() =>{
        if (gameOver){
            setGameStarted(false);
        }
    }, [gameOver]);
    
    return(
        <div className="GameBar">
            <Game gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} gameOver={gameOver} setGameOver={setGameOver}/>
            <div className="ControlPanel">
                <Controls />
                <Button onClick={startGame}> Start </Button>
                <Button onClick={pauseGame}> {(gamePaused) ? "Resume" : "Pause"} </Button>
                <Button onClick={restartGame}> Restart </Button>
            </div>
        </div>
    )
}