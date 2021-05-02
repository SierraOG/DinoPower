import React, {useState, useEffect } from 'react';
import Score from './Score';
import Sprite from './Sprite';
import Character from './Character';
import Ground from './Ground';

let vel = new Set();

export default function Game({gameStarted, gamePaused, gameRestarted}) {
    const [gameOver, setGameOver] = useState(false);
    const [x,setX] = useState(-20);
    const [y,setY] = useState(-20);
    console.log('first vel=',vel);
    //const [vel,update] = useState(new Set());
    const [needsUpdate, update] = useState(false);

    const handleKeyPress = (event) => {
        switch (event.keyCode) {
            case 37:
                vel.add(0);
                //setX(x => (x-10));
                break;
            case 38:
                vel.add(1);
                // setY(y => (y-10));
                break;
            case 39:
                vel.add(2);
                // setX(x => (x+10));
                break;
            case 40:
                vel.add(3);
                // setY(y => (y+10));
                break;
        }
        move();
    }

    const handleKeyLift = (event) => {
        switch (event.keyCode) {
            case 37:
                vel.delete(0);
                break;
            case 38:
                vel.delete(1);
                break;
            case 39:
                vel.delete(2);
                break;
            case 40:
                vel.delete(3);
                break;
        }
    }

    useEffect(() =>{
        move();
    });

    function move(){
        if(vel.has(0) && x > -49) {
            setX(x => (x-0.01));
            console.log(x,y);
        }
        if(vel.has(1) && y > 0) {
            setY(y => (y-0.01));
            console.log(x,y);
        }
        if(vel.has(2) && x < 49) {
            setX(x => (x+0.01));
            console.log(x,y);
        }
        if(vel.has(3) && y < 80) {
            setY(y => (y+0.01));
            console.log(x,y);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
        document.addEventListener("keyup", handleKeyLift, false);
        return () => {
            document.removeEventListener("keydown", handleKeyPress, false);
            document.removeEventListener("keyup", handleKeyLift, false);
        };
    }, []);

    return(
        <div className="Game">
            <Score gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted}/>
            
            <div className="GameCanvas">
                <div className = {(gamePaused || !gameStarted) ? "PausedGround" : "Ground"}>
                </div>
                <Character x = {x} y = {y} z = {100} gamePaused = {gamePaused}/>

            </div>
        </div>
    )
}