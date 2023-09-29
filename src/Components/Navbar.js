import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'


const StyledNavLink = styled(NavLink) ({
    textDecoration:'none',
    color:'#fff',
    fontSize:20,
    "&.active": {
      background:'white',
      padding:10,
      borderRadius:5,
      color: 'black'
    }
})


const Navbar = () => {
  return (
    <div>
        <AppBar position='static' sx={{backgroundColor:'orange'}}>
            <Container>
            
            <Toolbar sx={{display: 'flex',justifyContent:'space-between'}}>
                <Typography variant='h5' sx={{fontSize:30}}>
                   <b>VKS Shop</b>

                </Typography>
                <Box sx={{display:"flex",alignItems: 'center',gap:'20px'}}>
                    <StyledNavLink to='/'>Home</StyledNavLink>
                    <StyledNavLink to='contact'>Person</StyledNavLink>
                    <StyledNavLink to='register'>Register</StyledNavLink>


                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Navbar