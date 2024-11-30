import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

const RegistrarVeta: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-index container-fluid py-1">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Panel de Ventas</h1>
        </div>
        <div className="container mt-0 pb-5">
          <div className="row">
            <div className="col-lg-6 text-dark mt-1">
              <form className="bg-light rounded p-4 shadow-sm">
                <div className="form-group">
                  <label htmlFor="inputCliente">Selecciona un Cliente: (Opcional)</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Buscar cliente por nombre, apellido o DNI"
                  />
                  <select
                    id="inputCliente"
                    className="form-control form-control-lg form-select"
                  >
                    <option value="">Seleccionar</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success mt-4">
                  Seleccionar
                </button>
              </form>
              <div className="mt-4 bg-light rounded p-4 shadow-sm">
                <h2 className="text-dark text-center mb-4">Datos del Cliente:</h2>
                <p><strong>Nombre:</strong></p>
                <p><strong>Apellido:</strong></p>
                <p><strong>DNI:</strong></p>
                <p><strong>Dirección:</strong></p>
                <p><strong>Teléfono:</strong></p>
              </div>
            </div>

            <div className="col-lg-6 text-dark">
              <form className="bg-light rounded p-4 shadow-sm mb-4 mt-1">
                <div className="form-group mb-3">
                  <label htmlFor="inputProducto">Selecciona un Producto:</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Buscar producto por nombre, marca o descripción"
                  />
                  <select
                    id="inputProducto"
                    className="form-control form-control-lg form-select"
                  >
                    <option value="">Seleccionar</option>
                  </select>
                </div>
                <button type="button" className="btn btn-success mt-2">
                  Agregar
                </button>
              </form>
              <table className="table  table-bordered table-striped bg-light table-sm ">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2} className="text-right">
                      <strong>Total:</strong>
                    </td>
                    <td colSpan={2}>
                      <strong>$0</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <form className="bg-light rounded p-4 shadow-sm">
                <div className="form-group mb-3">
                  <label htmlFor="observaciones">Observaciones:</label>
                  <textarea
                    id="observaciones"
                    className="form-control"
                    rows={3}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  Confirmar Venta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrarVeta;
