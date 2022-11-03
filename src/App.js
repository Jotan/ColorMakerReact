
import './App.css';

import Header from './components/Header';
import ItemListCointainer from './components/Items/ItemListCointainer';
import ItemDetailCointainer from './components/Items/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    
   
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={ <ItemListCointainer greeting="BIENVENIDO A LA TIENDA COLOR MAKERS" />}></Route>
        <Route  path="/category/:id" element={<ItemListCointainer/>}></Route>
        <Route  path="/item/:id" element={<ItemDetailCointainer/>}></Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
