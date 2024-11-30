import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import "/src/styles/LoginForm.css";

const CrearProducto: React.FC = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="bg-index container-fluid py-3">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Registrar un Nuevo Producto</h1>
        </div>

        <div
          className="container bg-light p-4 rounded shadow-lg"
          style={{ maxWidth: "900px" }}
        >
        

          <div className="row g-4">
            {/* Primera columna */}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">
                  Nombre del Producto:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: Laptop"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="marca" className="form-label">
                  Marca:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="marca"
                  name="marca"
                  placeholder="Ej: Dell"
                />
              </div>
            </div>

            {/* Segunda columna */}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="descripcion" className="form-label">
                  Descripción:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Ej: Laptop de alta gama"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="categoria" className="form-label">
                  Categoría:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="categoria"
                  name="categoria"
                  placeholder="Ej: Electrónica"
                />
              </div>
            </div>

            {/* Tercera columna */}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="precio" className="form-label">
                  Precio:
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="precio"
                  name="precio"
                  placeholder="Ej: 1200.50"
                  step="0.01"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="stock" className="form-label">
                  Stock:
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="stock"
                  name="stock"
                  placeholder="Ej: 10"
                  step="1"
                />
              </div>
            </div>
          </div>

          {/* Botón Guardar */}
          <div className="text-center mt-4">
            <button className="btn btn-success btn-sm px-4">
              Guardar Producto
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CrearProducto;
