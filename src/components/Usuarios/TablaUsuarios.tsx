import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
import "datatables.net-bs4";
import Navbar from "../Navbar/Navbar"; 
import Footer from "../Index/Footer";

const UsuariosRegistrados: React.FC = () => {
  useEffect(() => {
    $("#tablaUsuarios").DataTable({
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
          <h1 className="typing-text text-center">Usuarios Registrados</h1>
        </div>

        <section>
          <div className="bg-light p-2 rounded shadow-sm">
          <div className="card-header bg-primary text-white rounded-2">
          <h6 className="m-0 font-weight-bold">Clientes Registrados</h6>
        </div>
            <div className="table-responsive p-3">
              <table
                id="tablaUsuarios"
                className="table table-bordered table-sm table-hover m-3 table-striped text-black-50"
                width="100%"
                cellSpacing="0"
              >
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Nombre de Usuario</th>
                    <th>Rol</th>
                    <th>Fecha de Registro</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>admin</td>
                    <td>ADMINISTRADOR</td>
                    <td>27/11/2024</td>
                    <td>Activo</td>
                    <td>
                      <button className="btn btn-sm btn-primary rounded-circle">
                        Editar
                      </button>
                      <button className="btn btn-sm btn-danger rounded-circle ml-2">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>usuario01</td>
                    <td>USUARIO</td>
                    <td>27/11/2024</td>
                    <td>Activo</td>
                    <td>
                      <button className="btn btn-sm btn-primary rounded-circle">
                        Editar
                      </button>
                      <button className="btn btn-sm btn-danger rounded-circle ml-2">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UsuariosRegistrados;
