import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useAuth from '../../../Hooks/useAuth';

const UserInfo = () => {
    const {user}=useAuth();
    const [userInfo, setUserInfo]=useState([]);

    useEffect(()=>{
        const url=`http://localhost:5000/user?email=${user.email}`
        fetch(url).then(res=>res.json()).then(data=>setUserInfo(data))
    },[])
    return (
        <TableContainer component={Paper}>
          <h3>{userInfo.length} Product Confirmation is success</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Product Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default UserInfo;