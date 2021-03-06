import React, {useState, useEffect } from 'react';
import sp1 from '../img/1.png';
import sp2 from '../img/2.png';
import sp3 from '../img/3.png';
import sp4 from '../img/4.png';
import sp5 from '../img/5.png';
import sp6 from '../img/6.png';
import sp7 from '../img/7.png';
import sp8 from '../img/8.png';

export default function Sprite({gamePaused}) {
    const [frame, setFrame] = useState(0);
    const imgArray = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8];
    const frameCount = 8;

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(frame);
            // console.log(gamePaused);
            if (!gamePaused){
                setFrame(frame + 1);
                if (frame >= frameCount - 1) {
                    setFrame(0);
                }
            }
        }, 100);
        return () => clearInterval(interval);
    }, [frame, gamePaused]);

    return(
        <div>
            <img src={imgArray[frame]} alt="sprite"/>
        </div>
    )
}