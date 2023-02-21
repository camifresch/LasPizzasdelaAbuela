import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import arrayProductos from "./json/productos.json"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(prod => prod.index === 2));
            }, 2000)
        });

        promesa.then((respuesta) => {
            setItem(respuesta);
        })
    }, []);
    
  return (
    <ItemDetail item={aa} />
  )
}

export default ItemDetailContainer