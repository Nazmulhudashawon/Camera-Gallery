import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BuyingModal = ({open,handleClose,productName}) => {
    const {user}=useAuth()
    const initialinfo={name:user.displayName, email:user.email}
    const [userData,setUserData]=useState(initialinfo)
   
    const handlebuyingsubmit=(e)=>{
        e.preventDefault();
        alert("success")
        handleClose();

    }
    const handleonBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newData = { ...userData };
      console.log(newData)
      newData[field] = value;
      setUserData(newData);
    };
    
    return (
        <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {productName}
          </Typography>
          <form onSubmit={handlebuyingsubmit}>
         
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
        />
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
        />
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          placeholder="phone"
          name="phone"
          onBlur={handleonBlur}
          
          size="small"
        />
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          placeholder="Address"
          name="address"
          onBlur={handleonBlur}
          size="small"
        />
       
       <Button type="submit"
       
            sx={{mt:2,backgroundColor:"tomato",ml:'130px'}} color="error"
            variant="contained"
          >
            Confirm
          </Button>

          </form>
         
        </Box>
      </Modal>
    );
};

export default BuyingModal;