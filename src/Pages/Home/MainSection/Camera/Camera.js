import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Cameras from '../Cameras/Cameras';
import { Alert, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';
import Getquery from './Getquery';
import { useQuery } from 'react-query';

 export default function Camera  ({services})  {

    const {data} = useQuery("services",() => Getquery());
   
  
    return (
        <div>
             <Fade left>
             <h1 className='mt-4'>Discover a world of visual expression</h1>
        </Fade>
           
           <Typography sx={{ml:'40%'}}>
           </Typography>
            <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {
                data.slice(0,6).map(camera=><Cameras key={camera.key} camera={camera} ></Cameras>)
            }
             </Grid>
      </Box>
      </Container>
      
            
        </div>
    );
};

