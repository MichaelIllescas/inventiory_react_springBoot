import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
import "datatables.net-bs4";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

const InformeProductosMasVendidos: React.FC = () => {
  useEffect(() => {
    $("#tablaProductos").DataTable({
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
    <div>
      <Navbar />
      <div className="container text-dark mt-4 pb-4">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">
            Informe de los 10 Productos Más Vendidos
          </h1>
        </div>
        <form
  className="bg-light p-3 rounded shadow-sm mb-4"
  style={{ maxWidth: "500px", margin: "0 auto" }} // Tamaño máximo y centrado
>
  <div className="row g-2 align-items-center">
    <div className="col-6">
      <label htmlFor="mes" className="form-label h6">
        Mes:
      </label>
      <select
        className="form-control form-select   border-info text-center"
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
    <div className="col-6">
      <label htmlFor="anio" className="form-label h6">
        Año:
      </label>
      <input
        type="number"
        className="form-control form-control-md border-info text-center"
        id="anio"
        name="anio"
        min="2020"
        max="2100"
        required
      />
    </div>
    <div className="col-12 text-center">
      <button
        className="btn btn-success btn-md w-50  mt-2"
        type="submit"
      >
        Generar Informe
      </button>
    </div>
  </div>
</form>


        <section>
          <div className="bg-light p-2 rounded shadow-sm">
            
            <div className="card-header bg-primary text-white rounded-2">
          <h6 className="m-0 font-weight-bold">Los 10 Productos Más Vendidos del Mes</h6>
        </div>
            <div className="table-responsive p-1 ">
              <table
                id="tablaProductos"
                className="table table-bordered table-hover table-striped text-black-50 table-sm m-3 "
                width="100%"
                cellSpacing="0"
              >
                <thead className="thead-dark">
                  <tr >
                    <th>Posición</th>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Marca</th>
                    <th>Cantidad Vendida</th>
                    <th>Total Generado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Televisor 50"</td>
                    <td>Electrónica</td>
                    <td>Samsung</td>
                    <td>150</td>
                    <td>$300,000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Silla Gamer</td>
                    <td>Muebles</td>
                    <td>DXRacer</td>
                    <td>100</td>
                    <td>$100,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center m-2">
              Total Generado por los 10 Productos: $400,000
            </h4>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default InformeProductosMasVendidos;
