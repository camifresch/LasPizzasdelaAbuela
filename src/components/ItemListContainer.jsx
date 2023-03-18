import React from 'react'
import ItemList from './ItemList';
// import arrayProductos from "./json/productos.json"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams(); 

  // useEffect(() => {
  //   const promesa = new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
  //       }, 2000);

  //   });

  //   promesa.then((respuesta) => {
  //     setItems(respuesta);
  //   });

  // }, [id]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "items");

  //   arrayProductos.forEach(item => {
  //     addDoc(itemsCollection, item);
  //   });

  //     console.log("Se Agregaron los Productos !");
  // }, []);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(filter).then(elements => {
      setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
    });
  }, [id]);

  return (
    <div className="container">
              <ItemList items={items} />
    </div>

    )
}

export default ItemListContainer