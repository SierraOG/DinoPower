import React, {useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react'
import Game from './Game';
import Controls from './Controls';

export default function GameBar() {
    const [gameStarted, setGameStarted] = useState(false);
    const [gamePaused, setGamePaused] = useState(false);
    const [gameRestarted, setGameRestarted] = useState(false);

    function startGame () {
        setGameStarted(true);
    }

    function pauseGame () {
        setGamePaused(true);
    }

    function restartGame () {
        setGameRestarted(true);
    }

    return(
        <div className="GameBar">
            <Game gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted}/>
            <div className="ControlPanel">
                <Controls />
                <Button onClick={startGame}> Start </Button>
                <Button onClick={pauseGame}> Pause </Button>
                <Button onClick={restartGame}> Restart </Button>
            </div>
        </div>
    )
}