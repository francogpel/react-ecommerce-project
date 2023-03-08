import React,{ useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { Productos } from "../Productos/Productos";

const ItemDetailContainer = () =>    {
   const [producto, setProd] = useState({})
   useEffect(() =>  {
    fetch(Productos)
     then((res) => res.json())
     then((e) => setProd(e.find(item => item.id === '1')))
     .catch((error) => console.log(error))
     .finally(() => setCarga(false))
 
   }, []);

    return (
        // <ItemDetail data={data}/>
        <>
            {typeof producto === "undefined" ? <div>Cargando...</div> :
            <ItemDetail prod=   { producto  }/>

            }
        </>
    );
}

export default ItemDetailContainer;