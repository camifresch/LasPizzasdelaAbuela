import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './context/CartContext';


const CartWidget = () => {

  
  const {cartTotal} = useContext(CartContext);

  return (cartTotal() > 0) ? 
    <Link to={"/cart"} className='btn btn-primary position-relative'>
    🛒<span>{cartTotal()}</span>
    </Link> : "";
}

export default CartWidget;