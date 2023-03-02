import { Form } from 'react-router-dom';
import './App.css'

import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import ProductDetail from './routes/prodectDetail/productDetail';
import Sucursal from './routes/sucursal/sucursal';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/shop' element={<Shop/>}/>
    <Route exact path='/shop/:id' element={<ProductDetail/>}/>
    <Route exact path='/sucursal' element={<Sucursal/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
