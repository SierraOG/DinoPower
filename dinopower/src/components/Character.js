import React, {useState, useEffect } from 'react';
import bug from '../img/img_01.png';
//import styled, {keyframes} from 'styled-components';
//import {bounce} from 'react-animations';
const ReactAnimationTimer = require('react-animation-frame');
export default function Character({image, x, y, z}) {
    let string_x;
    let string_y;
    string_x = String(x) + 'px';
    string_y = String(y) + 'px';
    return(
        <div style = {{
        height: "128px",
        width: "128px",
        position: "absolute",
        left: string_x,
        top: string_y,
        zIndex: `{z}`,
        }}
        >
        <img src = {bug} alt = "bug"/>
        </div>
    );
}


//        backgroundRepeat: "no_repeat",
//        backgroundImage: 'url(${image})',
//        backgroundPosition: '-${x}px -${y}px',
//    display: "inline-block",