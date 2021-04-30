import React, {useState, useEffect } from 'react';
import Sprite from './Sprite';

//import styled, {keyframes} from 'styled-components';
//import {bounce} from 'react-animations';
const ReactAnimationTimer = require('react-animation-frame');
export default function Character({x, y, z, gamePaused}) {
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
        <Sprite gamePaused={gamePaused}/>
        </div>
    );
}