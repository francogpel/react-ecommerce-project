import React from 'react';

import { Productos } from '../Productos/Productos';
import PRODUCTSLIST from '../ProductsList/ProductsList';

const PRODUCTSLISTCONTAINER = () => {
  return (
    <div>
      <PRODUCTSLIST Productos={Productos} />
    </div>
  );
};

export default PRODUCTSLISTCONTAINER;
