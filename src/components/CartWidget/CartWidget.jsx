import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Cart from '@mui/icons-material/ShoppingCart';
const CartWidget = () => {
    return (

              <IconButton
              size="large"
            
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Cart />
              </Badge>
            </IconButton>
      
       
      );
};

export default CartWidget;