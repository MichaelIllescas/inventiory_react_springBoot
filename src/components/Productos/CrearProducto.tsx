import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import "/src/styles/LoginForm.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";



const CrearProducto: React.FC = () => {

 // Estados para cada campo del formulario
 const [nombre, setNombre] = useState("");
 const [marca, setMarca] = useState("");
 const [descripcion, setDescripcion] = useState("");
 const [categoria, setCategoria] = useState("");
 const [stock, setStock] = useState(0);
 const [precio, setPrecio] = useState(0);
 const [mensaje, setMensaje] = useState(""); // Texto del mensaje
const [tipoMensaje, setTipoMensaje] = useState<"exito" | "error" | "">(""); // Tipo de mensaje


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const producto = { nombre, marca, descripcion, categoria, stock, precio };

  try {
       await axios.post("http://localhost:5000/api/productos/crearProducto", producto, {
          headers: {
              "Content-Type": "application/json",
          },
      });

      // Si la solicitud es exitosa
      setMensaje("Producto registrado con éxito");
      setTipoMensaje("exito");

      // Limpia los estados del formulario
      setNombre("");
      setMarca("");
      setDescripcion("");
      setCategoria("");
      setStock(0);
      setPrecio(0);
  } catch (error: any) {
     // Si ocurre un error, verificamos si hay un mensaje en la respuesta
     if (error.response && error.response.data) {
      setMensaje(error.response.data.error || "Error al registrar el producto");
      } else {
          // Si el error no tiene un mensaje específico
          setMensaje("Hubo un problema al registrar el producto");
      }
      setTipoMensaje("error");
  }
};





  return (
    <div className="content">
      <Navbar />
      <div className="bg-index container-fluid py-3">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Registrar un Nuevo Producto</h1>
        </div>

        <div
          className="container bg-light p-4 rounded shadow-lg"
          style={{ maxWidth: "900px" }}
        >
        <form onSubmit={handleSubmit}>
      
          <div className="row g-4">
            {/* Primera columna */}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">
                  Nombre del Producto:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: Laptop"
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="marca" className="form-label">
                  Marca:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="marca"
                  name="marca"
                  value={marca}
                  onChange={(e)=>setMarca(e.target.value)}

                  placeholder="Ej: Dell"
                />
              </div>
            </div>

            {/* Segunda columna */}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="descripcion" className="form-label">
                  Descripción:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Ej: Laptop de alta gama"
                  value={descripcion}
                  onChange={(e)=>setDescripcion(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="categoria" className="form-label">
                  Categoría:
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="categoria"
                  name="categoria"
                  placeholder="Ej: Electrónica"
                  value={categoria}
                  onChange={(e)=>setCategoria(e.target.value)}
                />
              </div>
            </div>

            {/* Tercera columna */}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="precio" className="form-label">
                  Precio:
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="precio"
                  name="precio"
                  placeholder="Ej: 1200.50"
                  step="0.01"
                  value={precio}
                  onChange={(e)=>setPrecio(Number(e.target.value))}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="stock" className="form-label">
                  Stock:
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="stock"
                  name="stock"
                  placeholder="Ej: 10"
                  step="0.1"
                  value={stock}
                  onChange={(e)=>setStock(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

     {/* Botón Guardar */}
     <div className="text-center mt-4">
    <button className="btn btn-success btn-md px-4">
        Guardar Producto
    </button>

    {mensaje && (
  <div
    className={`alert mt-4 d-flex align-items-center justify-content-center ${
      tipoMensaje === "exito" ? "alert-success" : "alert-danger"
    }`}
    role="alert"
    style={{ textAlign: "center" }} // Asegura que el texto esté centrado
  >
    {/* Ícono dinámico */}
    <i
      className={`bi ${
        tipoMensaje === "exito" ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill"
      } me-2`}
      style={{ fontSize: "1rem" }} // Ajusta el tamaño del ícono
    ></i>
    {/* Texto del mensaje */}
    <div>{mensaje}</div>
  </div>
)}

</div>




         
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CrearProducto;
