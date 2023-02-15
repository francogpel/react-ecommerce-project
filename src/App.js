
import './App.css';
import logoPetShop from "./imagenes/logoPet.svg";
import Carrito from "./imagenes/carrito.svg";

function App() {
  return (
   <header>
    <nav className='navBar'>
      <a href='#'><img className='logoPet' src={logoPetShop} alt='LogoPetShop'/></a>
      <ul className='navList'>
        <li className='navOption'><a href='#'>Home</a></li>
        <li className='navOption'><a href='#'>Shop</a></li>
        <li className='navOption'><a href='#'>Sucursal</a></li>
      </ul>
      <a href='#'><img className='carrito' src= {Carrito} alt='carrito'/></a>
    </nav>
    </header>
  );
}

export default App;
