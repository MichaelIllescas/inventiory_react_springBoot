import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
import "datatables.net-bs4";
import "/src/styles/TableClientes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  dni: string;
  cuil_cuit?: string;
}

const clientes: Cliente[] = [
  { id: 1, nombre: "Juan", apellido: "Pérez", direccion: "Calle 123", telefono: "123456789", dni: "12345678", cuil_cuit: "20-12345678-1" },
  { id: 2, nombre: "Ana", apellido: "García", direccion: "Av. Siempre Viva", telefono: "987654321", dni: "87654321" },
  { id: 3, nombre: "Carlos", apellido: "López", direccion: "Calle Falsa 123", telefono: "1122334455", dni: "45678912", cuil_cuit: "23-45678912-9" },
];

const TablaClientes: React.FC = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#dataTableClientes").DataTable({
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
    <Navbar />
    <div className="bg-index container-fluid py-1 ">
    <div className="typing-container titulo-main">
      <h1 className="typing-text text-center">Clientes Registrados</h1>
    </div>
    <div className="container mb-0 pb-2">
      <div className="cards shadow-sm bg-white p-2">
        <div className="card-header bg-primary text-white rounded-2">
          <h6 className="m-0 font-weight-bold">Clientes Registrados</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive p-3">
            <table
              id="dataTableClientes"
              className="table table-bordered table-hover text-center m-3 table-sm"
            >
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>DNI</th>
                  <th>CUIL/CUIT</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.apellido}</td>
                    <td>{cliente.direccion}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.dni}</td>
                    <td>{cliente.cuil_cuit || "N/A"}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        title="Editar Cliente"
                        onClick={() => alert(`Editar cliente ID: ${cliente.id}`)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={7} className="text-right">Total de Clientes:</th>
                  <th>{clientes.length}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  
    <Footer />
  </div>


    
  );
};

export default TablaClientes;
