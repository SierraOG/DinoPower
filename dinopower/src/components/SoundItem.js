import React, {useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import { Button, Icon } from 'semantic-ui-react';

export default function SoundItem({label, audio}) {
    const [value, setValue] = useState(30);
    const [paused, setPaused] = useState(true);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      audio.volume = newValue/100;
    };

    const handleButtonClick = () => {
        if (paused) {
            setPaused(false);
            audio.play();
        }
        else {
            setPaused(true);
            audio.pause();
        }
    }

    return(
        <div className="SoundItem">
            <div className="SoundLabel">
                <Button.Group icon>
                    <Button onClick={handleButtonClick}>
                        <Icon name={paused ? 'play' : 'pause'} />
                    </Button>
                </Button.Group>
                <h6>{label} </h6>
            </div>
            <Grid container spacing={2}>
                <Grid item>
                <Icon name='volume down' />
                </Grid>
                <Grid item xs>
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                <Icon name='volume up'/>
                </Grid>
            </Grid>
        </div>
    )
}