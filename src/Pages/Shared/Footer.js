import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black',marginTop:"90px",borderTop:"2px solid black",paddingTop:"20px",color:"gray" }}>
      <Container>
        <Grid container spacing={1} sx={{my:"4",mx:"auto",display:'flex',justifyContent:'center'}}>
          <Grid  item xs={12} md={2}>
            <Typography variant="h6" gutterBottom component="div">
              Customer Services
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Contact Us
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Call Us 855.622.7489
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Email us
            </Typography>
            
          </Grid>
          <Grid  item xs={12} md={2}>
          <Typography variant="h6" gutterBottom component="div">
          Our Policies
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Return Policy 
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Shipping Process
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Product Warranties 
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
          
           
            <Typography variant="h6" gutterBottom component="div">
            About Us 
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Camera gallery's History
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
            Site Map
            </Typography>
            
             
          </Grid>
          <Grid  item xs={12} md={3}>
          <Typography variant="h6" gutterBottom component="div">
          Featured Catagories
            </Typography>
        
          <Typography variant="subtitle1" gutterBottom component="div">
          Digital Cameras
            </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
          Point and Shoot Cameras
            </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
           Best Camera and lances deals
            </Typography>
          </Grid>
          <Grid  item xs={12} md={2}>
          <Typography variant="h6" gutterBottom component="div">
          Follow Us
            </Typography>
          <Typography variant="subtitle" gutterBottom component="div">
          Facebook
            </Typography>
          <Typography variant="subtitle" gutterBottom component="div">
          Tweeter
            </Typography>
          <Typography variant="subtitle" gutterBottom component="div">
          Instagram
            </Typography>
          </Grid>
        </Grid>
   
      </Container>
      <Typography style={{marginTop:"30px",paddingBottom:"10px",}} sx={{mt:"4"}} variant="subtitle" gutterBottom component="div">
        Copyright © 2022,Camera Gallery, C&A Marketing Inc. All Rights
          Reserved.
            </Typography>
     
    </div>
  );
};

export default Footer;
