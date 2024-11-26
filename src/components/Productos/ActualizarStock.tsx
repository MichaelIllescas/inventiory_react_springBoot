import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";

import Footer from "../Index/Footer";
import "/src/styles/ActualizarStock.css";




interface Producto {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  stock: number;
}

const ActualizarStock: React.FC = () => {
  // Estados
  const [productos] = useState<Producto[]>([
    { id: 1, nombre: "Producto A", marca: "Marca 1", descripcion: "Descripción A", precio: 50, stock: 10 },
    { id: 2, nombre: "Producto B", marca: "Marca 2", descripcion: "Descripción B", precio: 100, stock: 5 },
    { id: 3, nombre: "Producto C", marca: "Marca 3", descripcion: "Descripción C", precio: 150, stock: 20 },
  ]);
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [cantidadStock, setCantidadStock] = useState<number | null>(null);
  const [errorProd, setErrorProd] = useState<string | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>(""); // Estado para el término de búsqueda

  // Filtrar productos según el término de búsqueda
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      producto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // Manejar selección de producto
  const handleSelectProduct = (idProducto: number) => {
    const producto = productos.find((p) => p.id === idProducto) || null;
    setSelectedProduct(producto);
    setCantidadStock(producto ? producto.stock : null);
    setErrorProd(null);
    setConfirmationMessage(null);
  };

  // Manejar actualización de stock
  const handleActualizarStock = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedProduct && cantidadStock !== null) {
      setConfirmationMessage(`El stock de ${selectedProduct.nombre} se actualizó correctamente.`);
      setErrorProd(null);
      // Aquí puedes agregar la lógica para enviar los datos al servidor si es necesario
    } else {
      setErrorProd("Debe seleccionar un producto y una cantidad válida.");
    }
  };

  return (
<div >
      <Navbar />
      <div className="bg-index container-fluid pb-5 contenedor-stocks ">
      <div className="typing-container titulo-main">
        <h1 className="typing-text text-center">Actualizar el Stock de Productos</h1>
      </div>
      
    <div className="container  pb-5 mb-5 pt-0 mt-0 ">
      <div className="row mb-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Actualizar Stock de Producto</h5>
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
                  placeholder="Escribe el nombre, marca o descripción..."
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
              </div>

              {/* Formulario para seleccionar un producto */}
              <form className="mb-4">
                <div className="form-group">
                  <label htmlFor="inputProducto" className="text-dark">Selecciona un Producto:</label>
                  <select
                    id="inputProducto"
                    name="idProducto"
                    className="form-control form-control-lg form-select"
                    onChange={(e) => handleSelectProduct(parseInt(e.target.value))}
                  >
                    <option value="">Seleccionar...</option>
                    {productosFiltrados.map((producto) => (
                      <option key={producto.id} value={producto.id}>
                        {`${producto.nombre} - ${producto.marca} - ${producto.descripcion} - $${producto.precio}`}
                      </option>
                    ))}
                  </select>
                </div>
              </form>

              {/* Área para mostrar información del producto seleccionado */}
              {selectedProduct && (
                <div>
                  <h6>Información del Producto:</h6>
                  <p>
                    <strong>Nombre:</strong> {selectedProduct.nombre}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {selectedProduct.descripcion}
                  </p>
                  <p>
                    <strong>Stock actual:</strong> {selectedProduct.stock}
                  </p>

                  {/* Formulario para actualizar el stock */}
                  <form onSubmit={handleActualizarStock}>
                    <div className="form-group">
                      <label htmlFor="cantidad">Ingrese la cantidad del Stock a actualziar:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="cantidad"
                        name="cantidad"
                        value={cantidadStock ?? ""}
                        step="0.01"
                        required
                        onChange={(e) => setCantidadStock(parseFloat(e.target.value))}
                      />
                    </div>
                    <button type="submit" className="btn btn-success m-2">Actualizar Stock</button>
                  </form>
                </div>
              )}
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

export default ActualizarStock;
