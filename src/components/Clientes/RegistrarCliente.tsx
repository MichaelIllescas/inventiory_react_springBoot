import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

const RegistrarCliente: React.FC = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="bg-index container-fluid py-3">
      <div className="typing-container titulo-main">
        <h1 className="typing-text text-center">Registrar un Nuevo Cliente</h1>
      </div>

        <form
          className="container bg-light p-4 rounded shadow"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
       

          {/* Primera fila de inputs */}
          <div className="row">
            <div className="col-lg-4 mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido:
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección:
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="form-control form-control-sm"
              />
            </div>
          </div>

          {/* Segunda fila de inputs */}
          <div className="row">
            <div className="col-lg-4 mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono:
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="dni" className="form-label">
                DNI:
              </label>
              <input
                type="text"
                id="dni"
                name="dni"
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="cuil" className="form-label">
                CUIL/CUIT:
              </label>
              <input
                type="text"
                id="cuil"
                name="cuil_cuit"
                className="form-control form-control-sm"
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success w-50">
              Registrar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrarCliente;
