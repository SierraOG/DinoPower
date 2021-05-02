import React, {useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Score({gameStarted, gamePaused, gameRestarted, gameOver}) {
    const [score, setScore] = useState(0);
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false })


    useEffect(() => {

    });

    useEffect(() => {
        setScore(hours*36000 + minutes*600 + seconds*10);
        if (!localStorage.getItem('highscore')){
            localStorage.setItem('highscore', 0);
        }
        if (score >= localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', score+10);
        }
    },[seconds]);

    useEffect(() => {
        if (gameStarted){
            start();
        }
        if (gamePaused || gameOver){
            pause();
        }
        if (gameRestarted){
            reset();
        }
    });

    return(
        <div className="Score">
            <p>Score: {score}, Highscore: {localStorage.getItem('highscore')}</p>
        </div>
    )
}