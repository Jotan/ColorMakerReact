import React, {useEffect,useState} from 'react';
import ItemDetail from "./ItemDetail";
import {products} from '../../Mock/products';
import {useParams} from 'react-router-dom';


const ItemDetailCointainer = () => {
    const [item, setItemDetail] = useState({});
    const { id } = useParams();
    useEffect(()=>{
        const getItemDetail = () => {
          return new Promise((res,rej)=>{
            const filtro = products.filter((prod)=>parseInt(prod.id) == id) 
              res(filtro);
           
          })
        };
        getItemDetail().then((res)=>{
          
            setItemDetail(res[0]);
        })
        .catch((err)=>{
          console.log(err)
        })
      },[id]);
    return (
         <ItemDetail item={item}></ItemDetail>
    );
};

export default ItemDetailCointainer;