import React, {useState, useEffect } from 'react';
import sp1 from '../img/tile000.png';
import sp2 from '../img/tile001.png';
import sp3 from '../img/tile002.png';
import sp4 from '../img/tile003.png';
import sp5 from '../img/tile004.png';
import sp6 from '../img/tile005.png';
import sp7 from '../img/tile006.png';
import sp8 from '../img/tile007.png';
import bub from '../img/bub.png';

//import styled, {keyframes} from 'styled-components';
//import {bounce} from 'react-animations';
const ReactAnimationTimer = require('react-animation-frame');
export default function Character({x, y, z, gamePaused, gameStarted, ducking, gameRestarted}) {
    let string_x;
    let bub_x;
    let string_y;
    let bub_y;
    string_x = String(x) + '%';
    bub_x = String(x-7.5) + '%';
    string_y = String(y) + '%';
    bub_y = String(y+2) + '%';

    const style = {
        position: "relative",
        left: string_x,
        top: string_y,
        zIndex: 100,
        margin: 'none',
        height: '16%',
        width: '8%'
    };
    
    const duck = {
        position: "relative",
        left: string_x,
        top: String(y + 5) + '%',
        zIndex: 100,
        margin: 'none',
        height: '8%',
        width: '8%'
    };

    const bubble = {
        position: "relative",
        left: bub_x,
        top: bub_y,
        zIndex: 50,
        margin: 'none',
        height: '19%',
        width: '7%'
    };

    const [frame, setFrame] = useState(0);
    const imgArray = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8];
    const frameCount = 8;

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(frame);
            // console.log(gamePaused);
            if (!gamePaused && gameStarted){
                setFrame(frame + 1);
                if (frame >= frameCount - 1) {
                    setFrame(0);
                }
            }
        }, 100);
        return () => clearInterval(interval);
    }, [frame, gamePaused, gameStarted]);

    useEffect(() =>{
        setFrame(0);
    }, [gameRestarted]);

    return(
        <>
            <img style = {(ducking) ? duck : style } src={imgArray[frame]} alt="sprite"/>
            <img className="bub" style={bubble} src={bub} alt="bubble"/>
        </>
    );
}