import React, {useState, useEffect } from 'react';
import sp1 from '../img/dino1.png';
import sp2 from '../img/dino2.png';
import sp3 from '../img/dino3.png';
import sp4 from '../img/dino4.png';
import claw from '../img/fire.png';

export default function GroundEnemy({charX, charY, initX, gamePaused, gameStarted, setGameOver, gameRestarted, num}) {
    const [x, setX] = useState(initX);
    const [frame, setFrame] = useState(0);
    const imgArray = [sp1, sp2, sp3, sp4];
    const frameCount = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(frame);
            // console.log(gamePaused);
            if (!gamePaused && gameStarted){
                setX(x => (x - 1))
                setFrame(frame + 1);
                if (frame >= frameCount - 1) {
                    setFrame(0);
                }
                if (x < -60) {
                    setX(55);
                }
            }
        }, 100);
        return () => clearInterval(interval);
    }, [frame, gamePaused, gameStarted]);

    useEffect(() =>{
        setX(initX);
        setFrame(0);
    }, [gameRestarted]);

    useEffect(() => {
        if (!gamePaused && gameStarted){
            var a = charX - (x + 5);
            var b = charY - -30;
            var c = Math.sqrt( a*a + b*b );
            if (c < 0.5) {
                console.log("game over dist ", c);
                console.log("character ", charX, charY);
                console.log("enemy ", x, -30);
                setGameOver(true);
            }
        }
    }, [x, charX, charY]);

    return(
        <>
            <img src={imgArray[frame]} style={{position: "relative", left:String(x - num*10)+"%", top:"-30%", zIndex:"150", margin:'None', height: '20%', width: '10%'}} alt="dino"/>
            <img className="App-logo" src={claw} style={{position: "relative", left:String(x - num*10-22)+"%", top:"-27%", zIndex:"140", margin:'None', height: '20%', width: '20%'}} alt="claw"/>
            {/* <img src={imgArray[frame]} style={{position: "absolute", left:x+"%", top:"50%", zIndex:"150", margin:'None', height: '10%', width: '5%'}} alt="dino"/> */}
            </>
    )
}
