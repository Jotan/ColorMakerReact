import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

const Item = ({ prod }) => {
    return (
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width:250, height: 250 }}>
              <Img alt="complex" src={prod.img}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                 {prod.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {prod.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                STOCK DISPONIBLE: {prod.stock}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {prod.stock === 0 ? (
                    <h6>No hay stock</h6>
                ) : (
                    <Link to={`/item/${prod.id}`}>Ver detalle</Link>
                )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
               ${prod.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
   
    );
};

export default Item;