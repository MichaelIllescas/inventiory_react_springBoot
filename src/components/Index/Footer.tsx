import React from "react";
import "/src/styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container">
        <div className="row text-center">
          {/* Sección de copyright */}
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Inventiory. Todos los derechos reservados.</p>
          </div>

          {/* Sección de enlaces */}
          <div className="col-12 col-md-6">
            <p>
              <a href="https://www.privacidad.com" className="text-light mx-2">
                Políticas de Privacidad
              </a>
              |
              <a href="https://www.terminos.com" className="text-light mx-2">
                Términos y Condiciones
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
