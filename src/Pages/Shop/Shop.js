import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Shops from './Shops';
import Navigation from '../Shared/Navigation';

const Shop = () => {
    const [cameras,setCameras]=useState([])
    // console.log(cameras)
    useEffect(()=>{
        fetch('./data.json').then(res=>res.json()).then(data=>setCameras(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <h1>Discover a world of visual expression</h1>
            <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {
                cameras.map(camera=><Shops key={camera.key} camera={camera}></Shops>)
            }
             </Grid>
      </Box>
      </Container>
            
        </div>
    );
};

export default Shop;