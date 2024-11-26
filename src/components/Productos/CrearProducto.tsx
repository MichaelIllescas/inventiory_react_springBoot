import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";


const CrearProducto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    marca: "",
    descripcion: "",
    categoria: "",
    precio: "",
    stock: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Aquí puedes hacer la lógica de envío al servidor, como una petición HTTP.
  };

  return (

    <div className="overflow-hidden" >
      <Navbar />
      <div className="bg-index container-fluid py-1 ">
      <div className="typing-container titulo-main">
        <h1 className="typing-text text-center">Registrar un Nuevo Producto!</h1>
      </div>

      <div className="d-flex align-items-center justify-content-center mb-1 pb-2">
      <div
        className="container mb-0 mt-0 inset-shadow-gray bg-light rounded-2 shadow-lg"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="my-4 mt-0 pt-2 text-center text-dark">Registrar Producto</h1>
        <form className="mb-5 text-dark" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="nombre">Nombre del Producto:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="marca">Marca:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="marca"
                  name="marca"
                  value={formData.marca}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="descripcion">Descripción:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="categoria">Categoría:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="precio">Precio:</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="precio"
                  name="precio"
                  value={formData.precio}
                  onChange={handleInputChange}
                  step="0.01"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  step="0.01"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center mt-3">
              <button
                type="submit"
                className="btn btn-success btn-block blue w-25 m-auto rounded"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>


      </div>
    
      <Footer />
    </div>
    
  );
};

export default CrearProducto;
