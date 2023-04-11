import { Button, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddProducts = () => {
    const { user, isloading } = useAuth();
    if (isloading) { return <CircularProgress /> }
    return (
        <div>
             <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}} >
              <TextField
                sx={{ width: '50%', m: '3', py: 4 }}
                id="filled-password-input"
                label="Product Name"
                
              />
              <TextField
                sx={{ width: '50%', m: '2', py: 4 }}
                id="filled-password-input"
                label="Product Details"
                
              />
              <TextField
                sx={{ width: '50%', m: '2', py: 4 }}
                id="filled-password-input"
                label="Product Price"
                
              />
              <TextField
                sx={{ width: '50%', m: '2', py: 4 }}
                id="filled-password-input"
                label="Image URL"
                
              />
              <Button type="submit" variant="contained">upload</Button>
            
              
            </form>
            
        </div>
    );
};

export default AddProducts;