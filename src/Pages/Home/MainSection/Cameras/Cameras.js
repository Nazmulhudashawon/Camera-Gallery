import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import BuyingModal from '../../../Buying Product/BuyingModal';


const Cameras = ({camera, setSuccess }) => {
  const{name,price,details,img}=camera
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 


  return (
    <>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ Width: '600px', height: '490px', m:2 }}>
        <CardActionArea>
          <img
            style={{ width: '200px', height: '200px', padding: '5px' }}
            src={img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{details}</Typography>
            <Typography variant="h6">{price}$</Typography>
          </CardContent>
        </CardActionArea>
        <Button onClick={handleOpen}sx={{mt:2,backgroundColor:"tomato"}} color="error" variant="contained">Buy Now</Button>
      </Card>
    </Grid>
    <BuyingModal setSuccess={setSuccess} open={open} productName={name} handleClose={handleClose}></BuyingModal>
    </>
  );
};

export default Cameras;
