import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Shops from './Shops';

const Shop = () => {
    const [cameras,setCameras]=useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    useEffect(()=>{
        fetch('https://fast-garden-88977.herokuapp.com/products').then(res=>res.json()).then(data=>setCameras(data))
    },[])
    return (
        <>
        <div>
            
            <h3>HOT NEW PRODUCTS</h3>
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
</>
    );
};

export default Shop;