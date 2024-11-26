import React from "react";
import "/src/styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const NavLinks: React.FC = () => {
  return (
    <ul className="navbar-nav mr-auto  ">
      {/* Link de Inicio */}
      <li className="nav-item">
        <a className="nav-link" href="/index">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="lg"
            className="text-dark"
          />{" "}
          Inicio
        </a>
      </li>

      {/* Dropdown Productos */}
      <li className="nav-item dropdown ">
        <a
          className="nav-link dropdown-toggle"
          href="javascript:void(0)"
          id="productosDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Productos
        </a>
        <ul
          className="dropdown-menu bg-dark"
          aria-labelledby="productosDropdown"
        >
          <li>
            <a className="dropdown-item text-light" href="/crearProductos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Nuevo Producto
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/verProductos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Productos Registrados
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/actualizarStock">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Actualizar Stock de Productos
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/aplicarAumentos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Aplicar Aumento de Precios
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/aplicarDescuento">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Aplicar Descuento de Precios
            </a>
          </li>
        </ul>
      </li>

      {/* Dropdown Clientes */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="javascript:void(0)"
          id="clientesDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Clientes
        </a>
        <ul
          className="dropdown-menu bg-dark"
          aria-labelledby="clientesDropdown"
        >
          <li>
            <a className="dropdown-item text-light" href="/registrarCliente">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Nuevo Cliente
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/verClientes">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Clientes Registrados
            </a>
          </li>
        </ul>
      </li>

      {/* Dropdown Ventas */}
      <li className="nav-item dropdown ">
        <a
          className="nav-link dropdown-toggle"
          href="javascript:void(0)"
          id="ventasDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Ventas
        </a>
        <ul className="dropdown-menu bg-dark" aria-labelledby="ventasDropdown">
          <li>
            <a className="dropdown-item text-light" href="/registrarVenta">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Nueva Venta
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/verVentas">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Ventas Registradas
            </a>
          </li>
        </ul>
      </li>

      {/* Dropdown Informes */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="javascript:void(0)"
          id="informesDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Informes
        </a>
        <ul
          className="dropdown-menu bg-dark"
          aria-labelledby="informesDropdown"
        >
          <li>
            <a className="dropdown-item text-light" href="/ventas">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Informe Mensual de Ventas
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/ventasDiarias">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Informe Diario de Ventas
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="/informeProductos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Informe Mensual de Productos
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
