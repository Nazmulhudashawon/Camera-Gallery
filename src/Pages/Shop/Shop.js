import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Shops from './Shops';
import BuyingModal from '../Buying Product/BuyingModal';
import { Alert } from '@mui/material';

const Shop = () => {
    const [cameras,setCameras]=useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [success, setSuccess]=useState(false)
  
    useEffect(()=>{
        fetch('http://localhost:5000/products').then(res=>res.json()).then(data=>setCameras(data))
    },[])
    return (
        <>
        <div>
            
            <h3>HOT NEW PRODUCTS</h3>
            {success && <Alert severity="success">your Product buying is confirmed </Alert>}
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
      <BuyingModal open={open}  handleClose={handleClose} ></BuyingModal>
</>
    );
};

export default Shop;