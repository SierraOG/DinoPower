import React, {useState, useEffect } from 'react';
import Score from './Score';
import Sprite from './Sprite';
import Character from './Character';
import Ground from './Ground';
import GroundEnemy from './GroundEnemy';

let vel = new Set();

export default function Game({gameStarted, gamePaused, gameRestarted, gameOver, setGameOver}) {
    const [x,setX] = useState(-20);
    const [y,setY] = useState(-30);
    const [ducking, setDucking] = useState(false);
    // console.log('first vel=',vel);
    //const [vel,update] = useState(new Set());
    const [needsUpdate, update] = useState(false);

    const jump = () => {
        const h = [5, 10, 15, 20, 0, 0, 0, 0, -20, -15, -10, -5];
        let idx = 0;
        const interval = setInterval(() => {
            console.log("jump ", y, "add ", h[idx]);
            setY(y => (y-h[idx]), console.log("y inside ", y));
            idx ++;
            if (idx > h.length - 1) {
                idx = 0;
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }

    const handleKeyPress = (event) => {
        if (!gameOver && !gamePaused && gameStarted){
            switch (event.keyCode) {
                case 37:
                    vel.add(0);
                    //setX(x => (x-10));
                    break;
                case 38:
                    // vel.add(1);
                    // setY(y => (y-10));
                    jump();
                    break;
                case 39:
                    vel.add(2);
                    // setX(x => (x+10));
                    break;
                case 40:
                    // vel.add(3);
                    setDucking(true);
                    // setY(y => (y+10));
                    break;
            }
            move();
        }
    }

    const handleKeyLift = (event) => {
        if (!gameOver && !gamePaused && gameStarted){
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
                    // vel.delete(3);
                    setDucking(false);
                    break;
            } 
        }
    }

    useEffect(() =>{
        if (!gameOver && !gamePaused && gameStarted){
            move();
        }
    });

    useEffect(() =>{
        setX(-20);
        setY(-30);
        setGameOver(false);
    }, [gameRestarted]);

    function move(){
        if(vel.has(0) && x > -49) {
            setX(x => (x-0.025));
            // console.log(x,y);
        }
        // if(vel.has(1) && y > 0) {
        //     // setY(y => (y-0.01));
        //     // jump();
        //     // console.log(x,y);
        // }
        if(vel.has(2) && x < 49) {
            setX(x => (x+0.025));
            // console.log(x,y);
        }
        // if(vel.has(3) && y < 80) {
        //     // setY(y => (y+0.01));
        //     // console.log(x,y);
        // }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
        document.addEventListener("keyup", handleKeyLift, false);
        return () => {
            document.removeEventListener("keydown", handleKeyPress, false);
            document.removeEventListener("keyup", handleKeyLift, false);
        };
    }, [gameStarted, gamePaused, gameOver]);

    return(
        <div className="Game">
            {(gameOver) ? (<h3> Game over </h3>) : (<> </>)}
            <Score gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} gameOver={gameOver}/>
            
            <div className="GameCanvas">
                <div className = {(gamePaused || !gameStarted) ? "PausedGround" : "Ground"}>
                </div>
                <Character x={x} y={y} z={100} gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} ducking={ducking}/>
                {/* <div > */}
                    <GroundEnemy gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} initX={60} charX={x} charY={y} setGameOver={setGameOver} num={0}/>
                    <GroundEnemy gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} initX={100} charX={x} charY={y} setGameOver={setGameOver} num={1}/>
                    <GroundEnemy gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} initX={130} charX={x} charY={y} setGameOver={setGameOver} num={2}/>
                {/* </div> */}
            </div>
        </div>
    )
}