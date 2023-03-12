import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from './components/Error404';
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";

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