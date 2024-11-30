import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import "/src/styles/ActualizarStock.css";

const ActualizarStock: React.FC = () => {
  return (
    <div  className="content">
      <Navbar />
      <div className="bg-index container-fluid pb-0 contenedor-stocks">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">
            Actualizar el Stock de Productos
          </h1>
        </div>

        <div
          className="container pb-1 mb-1 pt-0 mt-0"
          style={{ maxWidth: "900px" }}
        >
          <div className="card">
            <h5 className="card-header text-center">Actualizar Stock de Producto</h5>
            <div
              className="card-body row g-3 d-flex flex-wrap justify-content-between"
            >
              {/* Primera columna: Inputs y selección */}
              <div
                className="col-lg-4 col-md-6 d-flex flex-column justify-content-center"
              >
                <div className="form-group mb-3">
                  <label htmlFor="buscarProducto" className="form-label">
                    Buscar Producto:
                  </label>
                  <input
                    type="text"
                    id="buscarProducto"
                    className="form-control form-control-sm"
                    placeholder="Escribe el nombre, marca o descripción..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="inputProducto" className="form-label">
                    Selecciona un Producto:
                  </label>
                  <select
                    id="inputProducto"
                    name="idProducto"
                    className="form-control form-control-sm"
                  >
                    <option value="">Seleccionar...</option>
                    {/* Aquí van las opciones de productos */}
                  </select>
                </div>
                <button className="btn btn-primary btn-sm w-100">
                  Seleccionar
                </button>
              </div>

              {/* Segunda columna: Datos del producto seleccionado */}
              <div
                className="col-lg-4 col-md-6 d-flex flex-column justify-content-start"
              >
                <h6>Información del Producto:</h6>
                <p>
                  <strong>Nombre:</strong> {/* Aquí va el nombre del producto */}
                </p>
                <p>
                  <strong>Descripción:</strong>{" "}
                  {/* Aquí va la descripción del producto */}
                </p>
                <p>
                  <strong>Stock actual:</strong>{" "}
                  {/* Aquí va el stock actual del producto */}
                </p>
              </div>

              {/* Tercera columna: Actualización de stock */}
              <div
                className="col-lg-4 col-md-6 d-flex flex-column justify-content-start"
              >
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="cantidad">Actualizar Stock:</label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="cantidad"
                      name="cantidad"
                      step="0.01"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm w-100 "
                  >
                    Actualizar Stock
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActualizarStock;
