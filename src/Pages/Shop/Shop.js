import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Query from './Query'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Shops from './Shops';
import Cart from '../Cart/Cart';

export default function Shop ({services}) {
    const {data} = useQuery("services",() => Query());
    const [cart,setCart]=useState([])
   
   const handlebutton = ((camera)=>{
    const newcart=[...cart, camera];
    setCart(newcart);
    
    console.log(cart);

    }
    )

    return (
        <>
        <div>
            
            <h4 className='mt-4'>HOT NEW PRODUCTS</h4>
            <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {
                data.map(camera=><Shops key={camera.key} camera={camera} handlebutton={handlebutton}></Shops>)
            }
             </Grid>
        <div style={{display:"none"}} className='cart'>
            {
                <Cart cart={cart}></Cart>
            }
             </div>
      </Box>
      </Container>
            
        </div>
</>
    );
};

