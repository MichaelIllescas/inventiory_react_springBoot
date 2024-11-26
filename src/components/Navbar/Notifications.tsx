import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


const Notifications: React.FC = () => {
  return (
    <li className="nav-item dropdown no-arrow w-100">
      <a
        className="nav-link dropdown-toggle mt-1 "
        href="#"
        id="alertsDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
     <FontAwesomeIcon icon={faBell} size="lg" />
        <span className="badge badge-danger badge-counter text-bg-danger rounded-circle m-1">3+</span>
      </a>
      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in bg-dark">
        <h6 className="dropdown-header text-light">Centro de Notificaciones</h6>
        {/* Simulando una notificación */}
        <a
          className="dropdown-item d-flex align-items-center text-light"
          href="#"
        >
          <div className="mr-3">
            <div className="icon-circle bg-primary">
              <i className="fas fa-file-alt text-light"></i>
            </div>
          </div>
          <div>
            <span className="small text-light">December 12, 2019</span>
            <p className="text-light">
              A new monthly report is ready to download!
            </p>
          </div>
        </a>
        <a
          className="dropdown-item text-center small text-light"
          href="/centroNotificaciones"
        >
          Ver todas las notificaciones
        </a>
      </div>
    </li>
  );
};

export default Notifications;
