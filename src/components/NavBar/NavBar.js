import React from 'react'

import Link from '@material-ui/core/Link';
import HighlightIcon from '@material-ui/icons/Highlight';
import './NavBar.css';

const NavBar = () => {
  const preventDefault = event => event.preventDefault();

  return (
    <div className="sidebar">
      <div className="title">
        <h1>Transporte especial</h1>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-link" onClick={preventDefault}>
            Contratos
          </li>
          <li className="nav-link" onClick={preventDefault}>
            Viajes
          </li>
          <li className="nav-link" onClick={preventDefault}>
            Rutas
          </li>
          <li className="nav-link" onClick={preventDefault}>
            Conductores
          </li>
          <li className="nav-link" onClick={preventDefault}>
            Vehículos
          </li>
          <li className="nav-link" onClick={preventDefault}>
            Clientes
          </li>
          <li className="nav-link" onClick={preventDefault}>
            Cuenta
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;