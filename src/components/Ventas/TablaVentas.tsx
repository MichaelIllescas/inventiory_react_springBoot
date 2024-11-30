import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
import "datatables.net-bs4";


const TablaVentas: React.FC = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#dataTableVentas").DataTable({
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
    });
  }, []);

  return (
    <div className="content">
      
    
        <div className="container mb-0 pb-2">
          <div className="cards shadow-sm bg-white p-2">
          <div className="card-header bg-primary text-white rounded-2">
          <h6 className="m-0 font-weight-bold">Listado General de Ventas Registardas</h6>
        </div>
            <div className="card-body">
              <div className="table-responsive p-3">
                <table
                  id="dataTableVentas"
                  className="table table-sm table-bordered table-hover text-center m-3"
                >
                  <thead className="thead-dark ">
                    <tr>
                      <th>Cliente</th>
                      <th>DNI</th>
                      <th>Fecha</th>
                      <th>Monto</th>
                      <th>Observaciones</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Aquí se iterarán las ventas para generar filas dinámicamente */}
                    <tr>
                      <td>Juan Pérez</td>
                      <td>12345678</td>
                      <td>27/11/2024</td>
                      <td>$1500</td>
                      <td>Compra de electrodomésticos</td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          title="Editar Venta"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Ana García</td>
                      <td>87654321</td>
                      <td>27/11/2024</td>
                      <td>$3000</td>
                      <td>Compra de muebles</td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          title="Editar Venta"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3} className="text-right">Total:</th>
                      <th colSpan={3}>$4500</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default TablaVentas;
