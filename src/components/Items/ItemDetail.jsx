import React from "react";
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
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

const ItemDetail = ({item}) =>{
    
    return(
    <Container fixed>
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
            <ButtonBase sx={{ width:500, height: 500 }}>
              <Img alt="complex" src={item.img}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                 {ItemDetail.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                STOCK DISPONIBLE: {item.stock}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {item.stock === 0 ? (
                    <h6>No hay stock</h6>
                ) : (
                    <Link to={`/cart`}>AGREGAR AL CARRO</Link>
                )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
               ${item.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
   
    </Container>
    )
}

export default ItemDetail