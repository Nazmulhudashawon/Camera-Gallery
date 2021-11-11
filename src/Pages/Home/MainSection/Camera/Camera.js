import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Cameras from '../Cameras/Cameras';



const Camera = () => {
    const [cameras,setCameras]=useState([])
    // console.log(cameras)
    useEffect(()=>{
        fetch('./data.json').then(res=>res.json()).then(data=>setCameras(data))
    },[])
    return (
        <div>
            <h1>Discover a world of visual expression</h1>
            <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {
                cameras.slice(0,6).map(camera=><Cameras key={camera.key} camera={camera}></Cameras>)
            }
             </Grid>
      </Box>
      </Container>
            
        </div>
    );
};

export default Camera;