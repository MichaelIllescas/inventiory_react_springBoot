import React from "react";
import "/src/styles/Navbar.css";
import "/src/styles/LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const UserMenu: React.FC = () => {
  return (
    <li className="nav-item dropdown no-arrow">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="userDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="mr-2 d-none d-lg-inline text-gray-600">Usuario</span>
        <img
          className="img-profile rounded-circle"
          src="/public/undraw_profile.svg"
          alt="User"
        />
      </a>
      <div className="dropdown-menu bg-dark shadow animated--grow-in">
        <a
          className="dropdown-item text-light"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#cambiarContrasenaModal"
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="lg"
            className="text-light"
          />
          Cambiar Contraseña
        </a>
        <a
          className="dropdown-item text-light"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#logoutModal"
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="lg"
            className="text-light"
          />
          Cerrar Sesión
        </a>
      </div>
    </li>
  );
};

export default UserMenu;
