import React, {useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import music_file from '../audio/music/star-way.wav';
import ambience_file from '../audio/ambience/arcade.mp3';
import talking_file from '../audio/ambience/people.flac';
import SoundItem from './SoundItem';

let music = new Audio(music_file);
music.loop = true;

let ambience = new Audio(ambience_file);
ambience.loop = true;

let talking = new Audio(talking_file);
talking.loop = true;

export default function SoundBar() {

    return(
        <div className="SoundBar">
            <SoundItem label={"Music"} audio={music}/>
            <SoundItem label={"Arcade sounds"} audio={ambience}/>
            <SoundItem label={"People talking"} audio={talking}/>
        </div>
    )
}