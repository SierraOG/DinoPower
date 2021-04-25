import React, {useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default function SoundBar() {
    const [paused, setPaused] = useState(true);

    function playSound () {
        setPaused(false);
    }

    function pauseSound () {
        setPaused(true);
    }

    return(
        <div className="SoundBar">
            <h6>Music </h6>
            <Button.Group icon>
                <Button onClick={playSound}>
                    <Icon name='play' />
                </Button>
                <Button onClick={pauseSound}>
                    <Icon name='pause' />
                </Button>
            </Button.Group>
        </div>
    )
}