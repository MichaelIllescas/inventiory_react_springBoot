import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";

interface Producto {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
}

const AumentarPrecios: React.FC = () => {
  // Estados
  const [productos] = useState<Producto[]>([
    { id: 1, nombre: "Producto A", marca: "Marca 1", descripcion: "Descripción A", precio: 50 },
    { id: 2, nombre: "Producto B", marca: "Marca 2", descripcion: "Descripción B", precio: 100 },
    { id: 3, nombre: "Producto C", marca: "Marca 3", descripcion: "Descripción C", precio: 150 },
  ]);
  const [productosSeleccionados, setProductosSeleccionados] = useState<Producto[]>([]);
  const [errorProd, setErrorProd] = useState<string | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const [porcentajeAumento, setPorcentajeAumento] = useState<number>(1);
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>(""); // Estado para el término de búsqueda

  // Filtrar productos según el término de búsqueda
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      producto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // Manejar la selección de productos
  const agregarProducto = (idProducto: number) => {
    const producto = productos.find((p) => p.id === idProducto);
    if (producto && !productosSeleccionados.some((p) => p.id === idProducto)) {
      setProductosSeleccionados([...productosSeleccionados, producto]);
      setErrorProd(null);
    } else {
      setErrorProd("El producto ya está en la lista o no existe.");
    }
  };

  // Eliminar producto de la lista seleccionada
  const eliminarProducto = (idProducto: number) => {
    setProductosSeleccionados(
      productosSeleccionados.filter((producto) => producto.id !== idProducto)
    );
  };

  // Aplicar aumento
  const aplicarAumento = () => {
    setProductosSeleccionados(
      productosSeleccionados.map((producto) => ({
        ...producto,
        precio: producto.precio + (producto.precio * porcentajeAumento) / 100,
      }))
    );
    setConfirmationMessage("El aumento se aplicó correctamente.");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-index container-fluid py-1">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Aumentar Precios a Productos</h1>
        </div>
        <div className="container mt-0 pt-0 pb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="bg-white p-3 rounded-2 shadow-lg">
                <h5 className="card-header">Aumentar Precios de los Productos:</h5>
                <div className="card-body">
                  {/* Mensaje de error */}
                  {errorProd && (
                    <div className="alert alert-danger" role="alert">
                      {errorProd}
                    </div>
                  )}

                  {/* Mensaje de confirmación */}
                  {confirmationMessage && (
                    <div className="alert alert-success" role="alert">
                      {confirmationMessage}
                    </div>
                  )}

                  {/* Campo de búsqueda */}
                  <div className="form-group">
                    <label htmlFor="buscarProducto">Buscar Producto:</label>
                    <input
                      type="text"
                      id="buscarProducto"
                      className="form-control"
                      placeholder="Escribe el nombre, marca o descripción y seleccionelo..."
                      value={terminoBusqueda}
                      onChange={(e) => setTerminoBusqueda(e.target.value)}
                    />
                  </div>

                  {/* Formulario para seleccionar un producto */}
                  <div className="col-lg-12">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const idProducto = parseInt(
                          (e.target as HTMLFormElement).inputProducto.value
                        );
                        agregarProducto(idProducto);
                      }}
                      className="mb-4"
                    >
                      <div className="form-group">
                        <label htmlFor="inputProducto">Selecciona un Producto:</label>
                        <select
                          id="inputProducto"
                          name="idProducto"
                          className="form-control form-control-lg form-select"
                        >
                          <option value="">Seleccionar</option>
                          {productosFiltrados.map((producto) => (
                            <option key={producto.id} value={producto.id}>
                              {`${producto.nombre} - ${producto.marca} - ${producto.descripcion} - ${producto.precio}`}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button type="submit" className="btn btn-success m-2">
                        Agregar
                      </button>
                    </form>

                    {/* Tabla para mostrar productos seleccionados */}
                    <div className="table-responsive">
                      <table className="table table-bordered bg-gradient-light">
                        <thead>
                          <tr>
                            <th>Producto</th>
                            <th>Precio Actual</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productosSeleccionados.map((prod) => (
                            <tr key={prod.id}>
                              <td>{prod.nombre}</td>
                              <td>${prod.precio.toFixed(2)}</td>
                              <td className="w-25">
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => eliminarProducto(prod.id)}
                                >
                                  Eliminar
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Formulario para confirmar el aumento */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        aplicarAumento();
                      }}
                      className="p-1"
                    >
                      <div className="form-group d-flex">
                        <label htmlFor="cant" className="text-gray w-100">
                          Porcentaje de Aumento:
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-sm w-50"
                          id="cant"
                          name="cant"
                          value={porcentajeAumento}
                          min="1"
                          step="1"
                          onChange={(e) => setPorcentajeAumento(parseInt(e.target.value))}
                        />
                      </div>
                      <button type="submit" className="btn btn-success">
                        Aplicar Aumento
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AumentarPrecios;
