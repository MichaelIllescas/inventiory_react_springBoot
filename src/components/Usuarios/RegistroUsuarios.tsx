import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

const RegistrarUsuario: React.FC = () => {
  return (
    <div className="bg-login-image" id="page-top">
      <Navbar />
      <div className="typing-container titulo-main pb-0">
        <h1 className="typing-text text-center">Registrar Usuario</h1>
      </div> 
      {/* Formulario de registro de usuario */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div
          className="container p-4 bg-light text-dark rounded shadow-lg"
          style={{ maxWidth: "700px" }}
        >
         <form>
            {/* Nombre de Usuario y Rol */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="nombreUsuario"
                    name="nombreUsuario"
                    placeholder="Ingrese el nombre de usuario"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="rol">Rol:</label>
                  <select
                    className="form-control form-control-sm form-select"
                    id="rol"
                    name="rolId"
                    required
                  >
                    <option value="1">ADMINISTRADOR</option>
                    <option value="2">USUARIO</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contraseña y Repetir Contraseña */}
            <div className="row g-3 mt-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="clave">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    id="clave"
                    name="clave"
                    placeholder="Ingrese la contraseña"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="claveRepeat">Repetir Contraseña:</label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    id="claveRepeat"
                    name="clave_repeat"
                    placeholder="Repita la contraseña"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Botón Guardar */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-success btn-md w-50"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default RegistrarUsuario;
