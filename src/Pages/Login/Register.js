
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = (props) => {
    const [loginData, setLoginData] = useState({});
    const {user, register, isloading,autherror}=useAuth();
  const handleOnchange = (e) => {
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
   register(loginData.email, loginData.password)
  };
    return (
        
        <Container>
     
          <Typography variant="h6">Register</Typography>
          {!isloading && <form onSubmit={handlesubmitregister}>
            <TextField
              sx={{ width: '75%', m: '2', py: 4 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnchange}
              variant="standard"
            />
            <TextField
              sx={{ width: '75%', m: '2', py: 4 }}
              id="standard-basic"
              type="password"
              label="Password"
              name="password"
              onChange={handleOnchange}
              variant="standard"
            />
            <TextField
              sx={{ width: '75%', m: '2', py: 4 }}
              id="standard-basic"
              type="password"
              label="Confirm Password"
              name="password2"
              onChange={handleOnchange}
              variant="standard"
            />

              <Button style={{ textDecoration: 'none' }} type="submit"
                sx={{ backgroundColor: '#1ac6ff', width: '75%', px: 4 }}
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