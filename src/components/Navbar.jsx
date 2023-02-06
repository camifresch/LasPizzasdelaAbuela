import React from 'react'
import Cartwidget from './Cartwidget'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="index.html">Quien soy?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/servicios.html">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/contacto.html">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/reservar-turno.html">Reservar Turno</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/cuidados.html">Cuidados</a>
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