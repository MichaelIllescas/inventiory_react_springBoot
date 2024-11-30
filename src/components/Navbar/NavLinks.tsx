import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const NavLinks: React.FC = () => {
  return (
    <ul className="navbar-nav mr-auto">
      {/* Link de Inicio */}
      <li className="nav-item">
        <Link className="nav-link" to="/index">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="lg"
            className="text-dark"
          />{" "}
          Inicio
        </Link>
      </li>

      {/* Dropdown Productos */}
      <li className="nav-item dropdown">
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
            <Link className="dropdown-item text-light" to="/crearProductos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Nuevo Producto
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/verProductos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Productos Registrados
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/actualizarStock">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Actualizar Stock de Productos
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/aplicarAumentos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Aplicar Aumento de Precios
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/aplicarDescuento">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Aplicar Descuento de Precios
            </Link>
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
            <Link className="dropdown-item text-light" to="/registrarCliente">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Nuevo Cliente
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/verClientes">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Clientes Registrados
            </Link>
          </li>
        </ul>
      </li>

      {/* Dropdown Ventas */}
      <li className="nav-item dropdown">
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
            <Link className="dropdown-item text-light" to="/registrarVenta">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Nueva Venta
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/verVentas">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Ventas Registradas
            </Link>
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
            <Link className="dropdown-item text-light" to="/ventasMensuales">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Informe Mensual de Ventas
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/ventasDiarias">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Informe Diario de Ventas
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/informeMensualProductos">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Informe Mensual de Productos
            </Link>
          </li>
        </ul>
      </li>

      {/* Dropdown Usuarios */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="javascript:void(0)"
          id="usuariosDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Usuarios
        </a>
        <ul
          className="dropdown-menu bg-dark"
          aria-labelledby="usuariosDropdown"
        >
          <li>
            <Link className="dropdown-item text-light" to="/registrarUsuario">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Registrar Usuario
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/verUsuarios">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Ver Usuarios
            </Link>
          </li>
        </ul>
      </li>
        {/* Dropdown Estadisticas */}
        <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="javascript:void(0)"
          id="estadisticasDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Estadísticas
        </a>
        <ul
          className="dropdown-menu bg-dark"
          aria-labelledby="estadisticasDropdown"
        >
          <li>
            <Link className="dropdown-item text-light" to="/estadisticaAnual">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Balance Anual de Ventas
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light" to="/balancesTrimestrales">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className="text-light"
              />
              Balance Trimestral de Ventas
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
