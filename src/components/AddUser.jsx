import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {addUser} from '../service/api'


const FormGroupStyle=styled(FormGroup)`
  margin:20px;
  width:50%;
  margin-left:28%;
  &> div{
    margin-top:20px
  }
  `
  const Type=styled(Typography)`
  margin-bottom:50px;
  text-align:center;
  font-size:60px;
  color:yellow;
  font-family:cursive
  `
  const defaultValue={
    name:"",
    username:"",
    email:"",
    phone:""
  }
function AddUser() {
  const [user,setUser]= useState(defaultValue);
 const onValueChange=(e)=>{
console.log(e.target.value, e.target.name)
setUser({...user,[e.target.name]: e.target.value}) 
console.log(user) // need to spread the object to prevent overriding
  }
  const AddUserDetails=async()=>{
   await addUser(user);
  }
  return (
<FormGroupStyle>
<Type variant='h4'>Add User</Type>
  <FormControl>
    <InputLabel>Name</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="name"/> 
  </FormControl>
  <FormControl>
    <InputLabel>Username</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="username"/> 
  </FormControl>
  <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="email"/> 
  </FormControl>
  <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="phone"/> 
  </FormControl>
  <FormControl>
  <Button variant="contained" onClick={()=>AddUserDetails()}>Add User</Button>
  </FormControl>
</FormGroupStyle>
    )
}

export default AddUser