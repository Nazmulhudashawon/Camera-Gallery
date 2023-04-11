import {
    Alert,
    Button,
    CircularProgress,
    Container,
    TextField,
    Typography,
  } from '@mui/material';
import { typography } from '@mui/system';
  import React, { useState } from 'react';
  import { NavLink, useHistory, useLocation } from 'react-router-dom';
  import useAuth from '../../Hooks/useAuth.js';
  
  const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location=useLocation();
    const history=useHistory()
    const { user, login, autherror, isloading,googleSignin } = useAuth();
    const handleonBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const hndlesubmitlogin = (e) => {
      e.preventDefault();
      login(loginData.email, loginData.password,location, history);
    };
    const handlegoogleSignin=()=>{
      googleSignin(location, history)
    }
    return (
      <Container>
            <Typography sx={{mt:8}} variant="h5">Login</Typography>
            <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}} onSubmit={hndlesubmitlogin}>
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
              <NavLink style={{ textDecoration: 'none', }} to="/register">
              <Button variant="text">Not Registerd Create an account</Button>
              </NavLink>
              <Button
                type="submit"
                sx={{ mt: 3, backgroundColor: 'rgb(69 213 203)', width: '50%', px: 4 }}
                variant="contained"
              >
                Login
              </Button>
  
              <Typography variant="h6">OR</Typography>
              
                <Button onClick={handlegoogleSignin}
                  sx={{ backgroundColor: 'rgb(69 213 203)', width: '50%', px: 4 }}
                  variant="contained"
                >
                  Google Signin
                </Button>
              
            </form>
            {isloading && <CircularProgress />}
            {user?.email && <Alert severity="success">login is success</Alert>}
    {autherror && <Alert severity="error">{autherror}</Alert>}

      </Container> 
    );
  };
  
  export default Login;
  