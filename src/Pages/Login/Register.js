
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Register = (props) => {
    const [loginData, setLoginData] = useState({});
    const {user, register, isloading, autherror}=useAuth();
    const history=useHistory()
  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handlesubmitregister = (e) => {
    e.preventDefault();

      if (loginData.password!==loginData.password2){
          alert("password did not match the pass")
          return
   }
   register(loginData.email, loginData.password, loginData.name, history)
  };
    return (
        
        <Container>
     
          <Typography sx={{mt:8}} variant="h6">Register</Typography>
          {!isloading && <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}} onSubmit={handlesubmitregister}>
            <TextField
              sx={{ width: '50%', m: '2', py: 4 }}
              id="standard-basic"
              label="Name"
              name="name"
              onBlur={handleonBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: '50%', m: '2', py: 4 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleonBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: '50%', m: '2', py: 4 }}
              id="standard-basic"
              type="password"
              label="Password"
              name="password"
              onBlur={handleonBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: '50%', m: '2', py: 4 }}
              id="standard-basic"
              type="password"
              label="Confirm Password"
              name="password2"
              onBlur={handleonBlur}
              variant="standard"
            />

              <Button style={{ textDecoration: 'none' }} type="submit"
                sx={{ backgroundColor: 'rgb(69 213 203)', width: '50%', px: 4 }}
                variant="contained"
              >
                Register
              </Button>
            
          </form>}
          {isloading && <CircularProgress />}
          {user?.email && <Alert severity="success">Registation is success</Alert>}
          {autherror && <Alert severity="error">{autherror}</Alert>}
       
    </Container>
    );
};

export default Register;