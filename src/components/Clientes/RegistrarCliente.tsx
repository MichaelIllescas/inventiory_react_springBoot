import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
const RegistrarCliente: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    dni: "",
    cuil_cuit: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de ejemplo: verifica si todos los campos requeridos están llenos
    if (!formData.nombre || !formData.apellido || !formData.direccion || !formData.telefono || !formData.dni) {
      setError("Todos los campos requeridos deben estar llenos.");
      return;
    }

    setError(null);
    console.log("Form data submitted:", formData);

    // Aquí puedes enviar los datos al servidor
  };

  return (
    <div >
      <Navbar />
      <div className="bg-index container-fluid py-1 ">
      <div className="typing-container titulo-main">
        <h1 className="typing-text text-center">Registrar un nuevo Cliente</h1>
      </div>
      
      <div className="d-flex align-items-center justify-content-center mb-1 pb-1">
      <div
        className="container mb-0 mt-0 inset-shadow-gray bg-light rounded-2 shadow-lg"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="my-3 text-center text-dark">Registrar Cliente:</h1>
        <form className="mb-5" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger text-center mt-3 py-1 pt-3">
              <p>{error}</p>
            </div>
          )}
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group text-dark">
                <label htmlFor="nombre">Nombre:</label>
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
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="direccion">Dirección:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="dni">DNI:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="cuil">CUIL/CUIT:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="cuil"
                  name="cuil_cuit"
                  value={formData.cuil_cuit}
                  onChange={handleInputChange}
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

export default RegistrarCliente;
