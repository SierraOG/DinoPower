import React, {useState, useEffect } from 'react';

export default function Score({gameStarted, gamePaused, gameRestarted}) {
    const [score, setScore] = useState(0);

    localStorage.getItem('myData');
    useEffect(() => {
        if (!localStorage.getItem('highscore')){
            localStorage.setItem('highscore', 0);
        }
        if (score > localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', score);
        }
    }, [score]);

    return(
        <div className="Score">
            <p>Score: {score}, Highscore: {localStorage.getItem('highscore')}</p>
        </div>
    )
}