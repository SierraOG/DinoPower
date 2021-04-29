import React, {useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Score({gameStarted, gamePaused, gameRestarted}) {
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
        setScore(hours*36000 + minutes*600 + seconds*10);
    });

    localStorage.getItem('myData');
    useEffect(() => {
        if (!localStorage.getItem('highscore')){
            localStorage.setItem('highscore', 0);
        }
        if (score > localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', score);
        }
    },[score]);

    useEffect(() => {
        if (gameStarted){
            start();
        }
        if (gamePaused){
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