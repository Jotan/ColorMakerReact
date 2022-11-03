import React, {useEffect,useState} from 'react';
import {products} from '../../Mock/products';
import Container from '@mui/material/Container';
import ItemList from './ItemList';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';

const ItemListCointainer = () => {
  const [items,setItems]=useState([]);
  const { id } = useParams();

  useEffect(()=>{
    const getProducts = () => {
      return new Promise((res,rej)=>{
        const filtro = products.filter((prod)=>prod.category === id) 
        const retorno = id ? filtro : products;
        
        setTimeout(()=>{
        
          res(retorno);
        },2000);
      })
    };
    getProducts().then((res)=>{
      setItems(res);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id]);
  return (
    <Container fixed>
      <Box>
     <ItemList items={items}> </ItemList>
     </Box>
    </Container>

  );
}
export default ItemListCointainer;