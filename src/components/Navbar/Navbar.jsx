import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
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
               <Link to="/"> COLORMAKERS</Link>
              </Typography>
              <Button color="inherit">  <Link to="/">INICIO</Link></Button>
              <Button color="inherit"><Link to="/category/PLANNERS">PLANNERS</Link></Button>
              <Button color="inherit"><Link to="/category/CUADERNOS">CUADERNOS</Link></Button>
              <Button color="inherit">CONTACTO</Button>
             
              <CartWidget/>
            
                
        
            </Toolbar>
          </AppBar>
        </Box>
      );
};

export default Navbar;