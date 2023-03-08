import React from 'react';
import './categories.css';
import  {Link} from 'react-router-dom'


const Categories = () => {
    return (
        <div className='categorias'>
           <h3>Categorias</h3>
           <ul className='categ-list'>
            <li className='list'><Link className='item' to='/shop'>Todos</Link></li>
            <li className='list'><Link className='item' to='/shop/lineas-de-alimentos'>Lineas de alimento</Link></li>
            <li className='list'><Link className='item' to='/shop/ropa'>Ropa</Link></li>
            <li className='list'><Link className='item' to='/shop/accesorios'>Accesorios</Link></li>
            <li className='list'><Link className='item' to='/shop/juguetes'>Juguetes</Link></li>
            <li className='list'><Link className='item' to='/shop/colchones-y-rascadores'>Colchones y rascadores</Link></li>
           </ul>
        </div>
    );
  };
  
  export default Categories;