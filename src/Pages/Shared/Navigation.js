import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import icon from '../../images/images.png';

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
   
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid mx-4">
          <img src={icon} alt="" />
          <h2 className='ms-3'>Camera <span style={{color:"tomato"}}>Gallery</span></h2>
          <button
            style={{ border: '1px solid black' }}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarSupportedContent">
            <div className="col-md-6 col-sm-12 ">
              <div class="search ">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="What are you looking for?"
                ></input>
                <button type="submit" class="searchButton">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="col align-items-center justify-content-center">
            
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/">Cart</Link>
              <Link to="/">Blog</Link>

              {user.email ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link onClick={logOut} to="/">
                    Logout
                  </Link>
                </>
              ) : (
                <Link to="/login"> Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    
  );
};

export default Navigation;
