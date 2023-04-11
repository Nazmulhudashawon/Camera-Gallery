import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useAuth from '../../../Hooks/useAuth';
import { useLocation } from 'react-router';
import { Button } from '@mui/material';

const Orders = () => {
  
    const {user}=useAuth();
    const [userInfo, setUserInfo]=useState([]);
    const [order, setOrder]=useState([]);
    const location=useLocation()

    useEffect(()=>{
        const url=`https://camerabuzz.onrender.com/order?email=${user.email}`
        fetch(url).then(res=>res.json()).then(data=>setUserInfo(data))
    },[])

    //delete an user
   const handledelete=(id)=>{
    console.log(id)
 const proceed=window.confirm ('are you sure want to Cancel the Product')
 if(proceed){
    const url=`https://camerabuzz.onrender.com/order/${id}`;
    fetch(url, {
       method:'DELETE'
   }).then(res=>res.json()).then(data=>{if (data.deletedCount > 0){
       alert("cancel success");
       const remainingusers= order.filter(users=> users._id !==id);
       setOrder(remainingusers);
       window.location.reload()
   }} )
   
 }      
}

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
              <Button  onClick={()=>handledelete(row._id)}>Cancel Product</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Orders;