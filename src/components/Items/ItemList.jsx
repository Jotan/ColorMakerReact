import React from 'react';
import Item from './Item';
import Grid from '@mui/material/Grid';



const ItemList = ({ items }) => {
   
    return (
        
            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
             {items.map((prod) => {
                return(
                    <Grid item xs={4} sm={4} md={4} key={prod.id}>
                    <Item prod={prod} key={prod.id} />
                    </Grid>
                );
                })}
             </Grid>
     
    );
};

export default ItemList;