import React from 'react';
import './categories.css';
import  {Link} from 'react-router-dom'


const Categories = () => {
    return (
        <div className='categorias'>
           <h3>Categorias</h3>
           <ul className='categ-list'>
            <li className='list'><Link className='item' to='/shop/category/todos'>Todos</Link></li>
            <li className='list'><Link className='item' to='/shop/category/lineas-de-alimentos'>Lineas de alimento</Link></li>
            <li className='list'><Link className='item' to='/shop/category/ropa'>Ropa</Link></li>
            <li className='list'><Link className='item' to='/shop/category/accesorios'>Accesorios</Link></li>
            <li className='list'><Link className='item' to='/shop/category/juguetes'>Juguetes</Link></li>
            <li className='list'><Link className='item' to='/shop/category/colchones-y-rascadores'>Colchones y rascadores</Link></li>
           </ul>
        </div>
    );
  };
  
  export default Categories;