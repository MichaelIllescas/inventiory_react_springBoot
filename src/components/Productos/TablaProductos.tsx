import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
import "datatables.net-bs4";
import "/src/styles/TableClientes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEdit } from "@fortawesome/free-solid-svg-icons"; 

interface Producto {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  stock: number;
}

const productos: Producto[] = [
  { id: 1, nombre: "Producto A", marca: "Marca 1", descripcion: "Descripción A", precio: 50, stock: 10 },
  { id: 2, nombre: "Producto B", marca: "Marca 2", descripcion: "Descripción B", precio: 100, stock: 0 },
  { id: 3, nombre: "Producto C", marca: "Marca 3", descripcion: "Descripción C", precio: 150, stock: 5 },
];

const TablaProductos: React.FC = () => {
    useEffect(() => {
        $(document).ready(function () {
          $("#dataTable").DataTable({
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
              infoPostFix: "",
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
    <div className="container mb-0 pb-2 ">
      <div className="cards shadow-sm bg-white p-2">
        <div className="card-header bg-primary text-white rounded-2">
          <h6 className="m-0 font-weight-bold">Productos Registrados</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive p-3">
            <table id="dataTable" className="table table-bordered table-hover text-center m-3 table-sm">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr
                    key={producto.id}
                    className={producto.stock === 0 ? "table-danger" : ""}
                  >
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.marca}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        title="Editar Producto"
                        onClick={() => alert(`Editar producto ID: ${producto.id}`)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={6} className="text-right">Total de Productos:</th>
                  <th>{productos.length}</th>
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

export default  TablaProductos;
