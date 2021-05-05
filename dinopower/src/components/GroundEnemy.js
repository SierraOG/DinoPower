import React, {useState, useEffect } from 'react';
import sp1 from '../img/dino1.png';
import sp2 from '../img/dino2.png';
import sp3 from '../img/dino3.png';
import sp4 from '../img/dino4.png';
import fire from '../img/firep.png'; 

export default function GroundEnemy({charX, charY, initX, gamePaused, gameStarted, setGameOver, gameRestarted, num, lives, setLives}) {
    const [x, setX] = useState(initX);
    const [frame, setFrame] = useState(0);
    const imgArray = [sp1, sp2, sp3, sp4];
    const frameCount = 4;
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(frame);
            // console.log(gamePaused);
            if (!gamePaused && gameStarted){
                setX(x => (x - speed))
                setSpeed(speed => (speed + 0.001))
                setFrame(frame + 1);
                if (frame >= frameCount - 1) {
                    setFrame(0);
                }
                if (x < -50) {
                    setX(Math.random() * (120 - 90) + 90);
                }
            }
        }, 100);
        return () => clearInterval(interval);
    }, [frame, gamePaused, gameStarted]);

    useEffect(() =>{
        setX(initX);
        setFrame(0);
        setSpeed(1);
    }, [gameRestarted]);

    useEffect(() => {
        if (!gamePaused && gameStarted){
            var a = charX - (x + 10 - 5*(num));
            var b = charY - -40;
            var c = Math.sqrt( a*a + b*b );
            if (c < 0.5) {
                //console.log("game over dist ", c);
                //console.log("character ", charX, charY);
                //console.log("enemy ", x, -30);
                if (lives == 1){
                    setLives(lives => (lives + 100));
                    setTimeout(()=>{setLives(0)}, 1000);


                } else if (lives == 0){
                    setGameOver(true);
                }                
            }
        }
    }, [x, charX, charY]);

    return(
        <>
            <img src={imgArray[frame]} style={{position: "relative", left:String(x - num*30)+"%", top:"-40%", zIndex:"150", margin:'None', height: '20%', width: '10%'}} alt="dino"/>
            <img className={(gamePaused || !gameStarted) ? "Fire-breath-paused" : "Fire-breath"} src={fire} style={{position: "relative", left:String(x - num*30 - 17)+"%", top:"-37%", zIndex:"140", margin:'None', height: '20%'}} alt="fire"/>
            {/* <img src={imgArray[frame]} style={{position: "absolute", left:x+"%", top:"50%", zIndex:"150", margin:'None', height: '10%', width: '5%'}} alt="dino"/> */}
            </>
    )
}
