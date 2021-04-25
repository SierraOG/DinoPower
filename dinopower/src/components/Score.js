import React, {useState, useEffect } from 'react';

export default function Score({gameStarted, gamePaused, gameRestarted}) {
    const [score, setScore] = useState(0);
    const [highscore, setHighScore] = useState(0);

    return(
        <div className="Score">
            <p>Score: {score}, Highscore: {highscore}</p>
        </div>
    )
}