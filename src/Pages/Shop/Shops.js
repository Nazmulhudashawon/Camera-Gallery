import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import BuyingModal from '../Buying Product/BuyingModal';


const Shops = (props) => {
    const { name, img, details, price } = props.camera;  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
      <Grid item xs={12} sm={6} md={4}>
        
        <Card sx={{ Width: '600px', height: '490px', m:2 }}>
          <CardActionArea>
            <Fade left>
            <img
              style={{ width: '200px', height: '200px', padding: '5px' }}
              src={img}
              alt=""
            />

            </Fade>
           
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body2">{details}</Typography>
              <Typography variant="h6">{price}$</Typography>
            </CardContent>
          </CardActionArea>
          <Button onClick={()=>(props.handlebutton(props.camera))} sx={{mt:2,backgroundColor:"tomato"}} color="error" variant="contained">add to cart</Button>
        </Card>
      </Grid>
      
      </>
    );
  };

export default Shops;