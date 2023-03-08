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

import ProductDetail from './routes/productDetail/productDetail';

import NavBar from './Componentes/navBar/navBar';
import Donation from './Componentes/donation/donation';
import Footer from './Componentes/footer/footer';


function App () {
  return (
   <BrowserRouter>
   <div className='row'>
    <header><NavBar/></header>
   <main><Routes>
       {/* NavBar */}
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/shop' element={<Shop/>}/>
    <Route exact path='/sucursal' element={<Sucursal/>}/> 

      {/* CATEGORIAS */}
    <Route exact path='/shop/lineas-de-alimentos' element={<Alimentos/>}/>
    <Route exact path='/shop/ropa' element={<Ropa/>}/>
    <Route exact path='/shop/accesorios' element={<Accesorios/>}/>
    <Route exact path='/shop/juguetes' element={<Juguetes/>}/>
    <Route exact path='/shop/colchones-y-rascadores' element={<ColchonesRascadores/>}/>

    {/* DETALLE DEL PRODUCTO */}
    <Route exact path='/shop/:id' element={<ProductDetail/>}/>
   </Routes></main>
   </div>
   <section><Donation/></section>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
