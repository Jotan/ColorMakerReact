import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="warning">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                COLORMAKERS
              </Typography>
              <Button color="inherit">INICIO</Button>
              <Button color="inherit">PLANNERS</Button>
              <Button color="inherit">CUADERNOS</Button>
              <Button color="inherit">CONTACTO</Button>
             
              <CartWidget/>
            
                
        
            </Toolbar>
          </AppBar>
        </Box>
      );
};

export default Navbar;