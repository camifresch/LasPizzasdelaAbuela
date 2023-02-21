import React from 'react'
import Cartwidget from './Cartwidget'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/pizzalogo.png"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to={"/"}><img src={logo} alt="Pizza Abuela" width={"108"} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link" activeclassname={"active"} to={"/"}>Productos</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" activeclassname={"active"} to={"/category/pizzas"}>Pizzas</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" activeclassname={"active"} to={"/category/empanadas"}>Empanadas</NavLink>
        </li>
      </ul>
    </div>
  </div>
      <Cartwidget/>
</nav>



    </>
  )
}

export default Navbar