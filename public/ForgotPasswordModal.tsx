import React from "react";
import "/src/styles/ForgotPasswordModal.css"

interface Props {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div
      className="modal fade show d-block"
      role="dialog"
      aria-labelledby="forgotPasswordModalLabel"
      aria-modal="true"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} /* Overlay oscuro */
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="forgotPasswordModalLabel">
              Recuperar Contraseña
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            Por favor, para recuperar tu contraseña contáctate con el
            administrador al abonado <strong>2923-530179</strong>.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
