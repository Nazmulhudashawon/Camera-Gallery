import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Cameras from '../Cameras/Cameras';
import { Alert, Typography } from '@mui/material';

const Camera = () => {
    const [cameras,setCameras]=useState([])
    // const [success, setSuccess]=useState(false)
  
   
    useEffect(()=>{
        fetch('https://fast-garden-88977.herokuapp.com/products').then(res=>res.json()).then(data=>setCameras(data))
    },[])
    return (
        <div>
            <h1>Discover a world of visual expression</h1>
           <Typography sx={{ml:'40%'}}>
           {/* {success && <Alert severity="success">your Product buying is confirmed </Alert>} */}
           </Typography>
            <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {
                cameras.slice(0,6).map(camera=><Cameras key={camera.key} camera={camera} ></Cameras>)
            }
             </Grid>
      </Box>
      </Container>
      
            
        </div>
    );
};

export default Camera;