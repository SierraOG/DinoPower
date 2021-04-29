import React, {useState, useEffect, setInterval } from 'react';
import bug1 from '../img/img_01.png';
import bug2 from '../img/img_02.png';

imgArray = [bug1, bug2];
frameCount = 2;
export default function Sprite({gamePaused}) {
    const [frame, setFrame] = useState(0);

    setInterval(() => {
        if (!gamePaused){
            setFrame(frame + 1);
            if (frame >= frameCount) {
                setFrame(0)
            }
        }
    }, 300);

    return(
        <div>
            <img src={imgArray[frame]}/>
        </div>
    )
}