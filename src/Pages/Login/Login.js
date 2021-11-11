import {
    Alert,
    Button,
    CircularProgress,
    Container,
    TextField,
    Typography,
  } from '@mui/material';
  import React, { useState } from 'react';
  import { NavLink, useHistory, useLocation } from 'react-router-dom';
//   import useAuth from '../../../hooks/useAuth';
  
  const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location=useLocation();
    const history=useHistory()
    // const { user, login, autherror, isloading } = useAuth();
    const handleonBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const hndlesubmitlogin = (e) => {
      e.preventDefault();
    //   login(loginData.email, loginData.password,location, history);
    };
    return (
      <Container>
            <Typography variant="h6">Login</Typography>
            <form onSubmit={hndlesubmitlogin}>
              <TextField
                sx={{ width: '75%', m: '2', py: 4 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleonBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: '2', py: 4 }}
                id="standard-basic"
                type="password"
                label="Password"
                name="password"
                onBlur={handleonBlur}
                variant="standard"
              />
  
              <Button
                type="submit"
                sx={{ mt: 3, backgroundColor: '#1ac6ff', width: '75%', px: 4 }}
                variant="contained"
              >
                Login
              </Button>
  
              <Typography variant="h6">OR</Typography>
              <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Button
                  sx={{ backgroundColor: '#1ac6ff', width: '75%', px: 4 }}
                  variant="contained"
                >
                  Register
                </Button>
              </NavLink>
            </form>
            {/* {isloading && <CircularProgress />}
            {user?.email && <Alert severity="success">login is success</Alert>}
    {autherror && <Alert severity="error">{autherror}</Alert>*/}

      </Container> 
    );
  };
  
  export default Login;
  