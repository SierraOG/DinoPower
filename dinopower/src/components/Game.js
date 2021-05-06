import React, {useState, useEffect } from 'react';
import Score from './Score';
import Sprite from './Sprite';
import Character from './Character';
import Ground from './Ground';
import GroundEnemy from './GroundEnemy';

let xmin = -10;
let xmax = 80;
let initx = 0;
let inity = -40;
let dx = 0.5;
let jumping = false;

export default function Game({gameStarted, gamePaused, gameRestarted, gameOver, setGameOver}) {
    const [x,setX] = useState(initx);
    const [y,setY] = useState(inity);
    const [ducking, setDucking] = useState(false);
    const [incx,setincx] = useState(false);
    const [decx,setdecx] = useState(false);
    const [lives, setLives] = useState(1);


    const jump = () => {
        const h = [5, 10, 15, 20, 0, 0, 0, 0, 0, 0, 0, -20, -15, -10, -5];
        let idx = 0;
        const interval = setInterval(() => {
            //console.log("jump ", y, "add ", h[idx]);
            setY(y => (y-h[idx]), console.log("y inside ", y));
            //console.log(y, " y position");
            idx ++;
            if (idx > h.length - 1) {
                idx = 0;
                clearInterval(interval);
                jumping = false;
            }
        }, 50);
        return () => clearInterval(interval);
    }

    useEffect(() => {
        if (!gameOver && !gamePaused && gameStarted){
            const interval = setInterval(() => {
                let inc = 0;
                let dec = 0;
                if (incx && x < xmax){
                    inc = dx;
                }
                if (decx && x > xmin) {
                    dec = -dx;
                }
                setX(x => (x+inc+dec));
            }, 10);
            return () => clearInterval(interval);
        }
    }, [incx, decx, x, gameStarted, gamePaused, gameOver]);

    const handleKeyPress = (event) => {
        if (!gameOver && !gamePaused && gameStarted){
            switch (event.keyCode) {
                case 37:
                    setdecx(true);
                    break;
                case 38:

                    if (!jumping){
                        jump();
                        jumping = true;
                    }                    
                    break;
                case 39:
                    setincx(true);
                    break;
                case 40:
                    setDucking(true);
                    break;
            }
        }
    }

    const handleKeyLift = (event) => {
        if (!gameOver && !gamePaused && gameStarted){
            switch (event.keyCode) {
                case 37:
                    setdecx(false);
                    break;
                case 38:
                    break;
                case 39:
                    setincx(false);
                    break;
                case 40:
                    setDucking(false);
                    break;
            } 
        }
    }

    useEffect(() =>{
        setX(initx);
        setY(inity);
        setGameOver(false);
        setincx(false);
        setdecx(false);
        setLives(1);
        setDucking(false);
    }, [gameRestarted]);

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
                <Character lives={lives} x={x} y={y} z={100} gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} ducking={ducking}/>
                {/* <div > */}
                    <GroundEnemy lives={lives} setLives={setLives} gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} initX={60} charX={x} charY={y} setGameOver={setGameOver} num={0}/>
                    <GroundEnemy lives={lives} setLives={setLives} gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} initX={100} charX={x} charY={y} setGameOver={setGameOver} num={1}/>
                    <GroundEnemy lives={lives} setLives={setLives} gameStarted={gameStarted} gamePaused={gamePaused} gameRestarted={gameRestarted} initX={140} charX={x} charY={y} setGameOver={setGameOver} num={2}/>
                {/* </div> */}
            </div>
        </div>
    )
}