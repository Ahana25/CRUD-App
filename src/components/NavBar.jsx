import React from 'react'
import {AppBar,Toolbar} from '@mui/material'
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Header=styled(AppBar)`
background:#111111;
position:static
`;
const Tabs= styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration: none
`

function NavBar() {
  return (
<Header>
    <Toolbar>
<Tabs to='/'>Code for Interview</Tabs>
<Tabs to='all'>All Users</Tabs>
<Tabs to='add'>Add User</Tabs>
    </Toolbar>
</Header>
    )
}

export default NavBar