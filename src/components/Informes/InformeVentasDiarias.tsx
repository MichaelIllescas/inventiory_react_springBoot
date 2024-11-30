import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
import "datatables.net-bs4";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

const InformeVentasDiarias: React.FC = () => {
  useEffect(() => {
    $("#tablaVentas").DataTable({
      paging: true,
      searching: true,
      ordering: true,
      destroy: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ registros",
        info: "Mostrando de _START_ a _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando 0 registros",
        infoFiltered: "(filtrado de _MAX_ registros en total)",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          previous: "Anterior",
          next: "Siguiente",
        },
        aria: {
          sortAscending: ": activar para ordenar la columna de manera ascendente",
          sortDescending: ": activar para ordenar la columna de manera descendente",
        },
      },
    });
  }, []);

  return (
    <div className="content">
      <Navbar />
      <div className="container text-dark mt-4 pb-4">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Informe Diario de Ventas</h1>
        </div>
        <form className="bg-light p-4 rounded shadow-sm mb-4">
          <div className="row g-3 align-items-center">
            <div className="col-md-3">
              <label htmlFor="dia" className="form-label h6">
              Ingrese el día:
              </label>
              <input
                type="number"
                className="form-control border-info text-center "
                id="dia"
                name="dia"
                min="1"
                max="31"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="mes" className="form-label h6">
                Seleccione el mes:
              </label>
              <select
                className="form-control border-info text-center"
                id="mes"
                name="mes"
              >
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="anio" className="form-label h6">
                Ingrese el año:
              </label>
              <input
                type="number"
                className="form-control border-info text-center"
                id="anio"
                name="anio"
                min="2020"
                max="2100"
                required
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-success w-100 mt-md-4" type="submit">
                Generar Informe
              </button>
            </div>
          </div>
        </form>

        <section>
          <div className="bg-light p-1 rounded shadow-sm">
            
          <div className="card-header bg-primary text-white rounded-2">
          <h6 className="m-0 font-weight-bold">Listado de ventas realizadas en el día</h6>
        </div>
            <div className="table-responsive p-3 ">
              <table
                id="tablaVentas"
                className="table table-bordered table-hover table-striped m-3 text-black-50 table-sm"
                width="100%"
                cellSpacing="0"
              >
                <thead className="thead-light">
                  <tr>
                    <th>N°</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Observaciones</th>
                    <th>Detalles</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Juan Pérez</td>
                    <td>27/11/2024</td>
                    <td>Compra de electrodomésticos</td>
                    <td>
                      <button className="btn btn-sm btn-primary rounded-circle">
                        Ver
                      </button>
                    </td>
                    <td>$1500</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ana García</td>
                    <td>27/11/2024</td>
                    <td>Compra de muebles</td>
                    <td>
                      <button className="btn btn-sm btn-primary rounded-circle">
                        Ver
                      </button>
                    </td>
                    <td>$3000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center mt-4">
              Importe Diario de Ventas Registradas: $4500
            </h4>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default InformeVentasDiarias;
