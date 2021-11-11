import React from 'react';
import Grid from '@mui/material/Grid';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from '@mui/material';


const Shops = (props) => {
    const { name, img, details, price } = props.camera;

    return (
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
          <Button sx={{mt:2,backgroundColor:"tomato"}} color="error" variant="contained">Add To Cart</Button>
        </Card>
      </Grid>
    );
  };

export default Shops;