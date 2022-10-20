import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ItemListCointainer = ({greeting}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <h1>{greeting}</h1>
      </Container>
    </React.Fragment>
  );
}
export default ItemListCointainer;