import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import "/src/styles/LoginForm.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const CrearProducto: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState<string[]>([]); // Lista de categorías
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState<"exito" | "error" | "">("");

  // Cargar las categorías desde el backend al cargar el componente
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/productos/obtenerCategorias");
        setCategorias(response.data); // Establece las categorías desde la respuesta
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    fetchCategorias();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const producto = { nombre, marca, descripcion, categoria, stock, precio };

    try {
      await axios.post("http://localhost:5000/api/productos/crearProductos", producto, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMensaje("Producto registrado con éxito");
      setTipoMensaje("exito");
      setNombre("");
      setMarca("");
      setDescripcion("");
      setCategoria("");
      setStock(0);
      setPrecio(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
     // Revisa si hay una respuesta de error desde el backend
  if (error.response) {
    console.error("Respuesta de error del backend:", error.response);

    // Verifica si el campo "error" está presente en la respuesta
    const mensajeError = error.response.data?.error || "Debe completar los campos";
    setMensaje(mensajeError);
  } else {
    console.error("Error sin respuesta del backend:", error);
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
                  <label htmlFor="nombre" className="form-label">Nombre del Producto:</label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder=" Ej: Remera"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="marca" className="form-label">Marca:</label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="marca"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="Ej: Nike"
                  />
                </div>
              </div>
              {/* Segunda columna */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="descripcion" className="form-label">Descripción:</label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Ej. Color rojo, talle 2"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="categoria" className="form-label">Categoría:</label>
                  <select
                    className="form-control form-control-md form-select"
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    
                  >
                    <option disabled value="">Selecciona una categoría</option>
                    {categorias.map((cat) => (
                      <option key={cat} value={cat}>{cat}
                       </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Tercera columna */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="precio" className="form-label">Precio:</label>
                  <input
                    type="number"
                    className="form-control form-control-smd"
                    id="precio"
                    value={precio}
                    onChange={(e) => setPrecio(Number(e.target.value))}
                    step={0.01}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="stock" className="form-label">Stock:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="stock"
                    step={0.01}
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
            {/* Botón Guardar */}
            <div className="text-center mt-4">
              <button className="btn btn-success btn-md px-4">Guardar Producto</button>
              {mensaje && (
                <div
                  className={`alert mt-4 d-flex align-items-center justify-content-center ${
                    tipoMensaje === "exito" ? "alert-success" : "alert-danger"
                  }`}
                  role="alert"
                >
                  <i
                    className={`bi ${
                      tipoMensaje === "exito"
                        ? "bi-check-circle-fill"
                        : "bi-exclamation-triangle-fill"
                    } me-2`}
                  ></i>
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
