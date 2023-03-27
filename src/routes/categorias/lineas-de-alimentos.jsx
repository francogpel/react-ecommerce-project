import React, { useState } from 'react';
import PRODUCTSLISTCONTAINER from '../../Componentes/ProductsListContainer/ProductsListContainer';
import Categories from "../../Componentes/categories/categories";
import { Productos } from '../../Componentes/Productos/Productos';

const categorias = ["Todos", "Lineas de alimentos", "Ropa", "Colchones y rascadores", "Juguetes", "Accesorios"];

const Alimentos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  // Filtrar los productos según la categoría seleccionada
  const productosFiltrados = Productos.filter(
    (producto) => categoriaSeleccionada === "Todos" || producto.category === categoriaSeleccionada
  );

  return (
    <div className='row'>
      <main>
        <Categories categorias={categorias} categoriaSeleccionada={categoriaSeleccionada} setCategoriaSeleccionada={setCategoriaSeleccionada} />
        <PRODUCTSLISTCONTAINER productos={productosFiltrados} />
      </main>
    </div>
  );
};

export default Alimentos;
