import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from './components/Error404';
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9LB-MOjc76MrBB8fUJqL812r_uGEH9g",
  authDomain: "las-pizzas-de-la-abuela-8d807.firebaseapp.com",
  projectId: "las-pizzas-de-la-abuela-8d807",
  storageBucket: "las-pizzas-de-la-abuela-8d807.appspot.com",
  messagingSenderId: "811892291042",
  appId: "1:811892291042:web:5658bce47da0be616675bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
<>
<Navbar/>
<Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
</>
</BrowserRouter>
</CartContextProvider>
  );
}

export default App