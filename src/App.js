import React from 'react';
import './App.css'

import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import Sucursal from './routes/sucursal/sucursal';

 import Accesorios from './routes/categorias/accesorios';
 import Alimentos from './routes/categorias/lineas-de-alimentos';
 import Ropa from './routes/categorias/ropa';
 import Juguetes from './routes/categorias/juguetes';
 import ColchonesRascadores from './routes/categorias/colchones-y-rascadores';

import NavBar from './Componentes/navBar/navBar';
import Donation from './Componentes/donation/donation';
import Footer from './Componentes/footer/footer';

import ItemDetailID from './routes/ItemDetailID/ItemDetailID';

import { CartCountProvider } from './Context/cartCountContext';



function App () {
  return (
    
   <BrowserRouter>
   <CartCountProvider>
   <div className='row'>
   <header><NavBar/></header>
   <main><Routes>
       {/* NavBar */}
    <Route exact path='' element={<Home/>}/>
    <Route exact path='/shop/category/todos' element={<Shop/>}/>
    <Route exact path='/sucursal' element={<Sucursal/>}/>

      CATEGORIAS
    <Route exact path='/shop/category/lineas-de-alimentos' element={<Alimentos/>}/>
    <Route exact path='/shop/category/ropa' element={<Ropa/>}/>
    <Route exact path='/shop/category/accesorios' element={<Accesorios/>}/>
    <Route exact path='/shop/category/juguetes' element={<Juguetes/>}/>
    <Route exact path='/shop/category/colchones-y-rascadores' element={<ColchonesRascadores/>}/>

    {/* DETALLE DEL PRODUCTO */}
    <Route exact path='/shop/product/:id' element={<ItemDetailID/>}/>
   </Routes></main>
   </div>
   <section><Donation/></section>
   <Footer/>
   </CartCountProvider>
   </BrowserRouter>
  );
}

export default App;
