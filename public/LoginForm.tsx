import React, { useState } from "react";
import "/src/styles/LoginForm.css";
import ForgotPasswordModal from "./ForgotPasswordModal";
import axios from "axios";
import Footer from "../src/components/Index/Footer";

// Instancia de Axios con la base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Asegúrate de que el backend esté ejecutándose en este puerto
});

const LoginForm: React.FC = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Limpia errores previos
    setSuccess(null); // Limpia mensajes previos

    if (!nombreUsuario || !clave) {
      setError("Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await axiosInstance.post("/acceder", { nombreUsuario, clave });

      console.log("Response JSON:", response.data); // Debugging

      // Verifica y redirige si el backend proporciona un `redirectUrl`
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        setError("No se pudo redirigir. Verifica tus credenciales.");
      }
    } catch (err: any) {
      // Manejo de errores
      const message =
        err.response?.data?.message || "Error desconocido. Intenta nuevamente.";
      setError(message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="typing-container">
        <h1 className="typing-text">Bienvenid@ a</h1>
        <h1 className="typing-text">Inventiory!</h1>
      </div>

      <div className="form-container">
        <div className="card shadow-lg p-4">
          <h2 className="card-title text-center text-dark-emphasis">Inicio de Sesión</h2>
          <form onSubmit={handleSubmit} className="needs-validation">
            <div className="form-group py-4">
              <label htmlFor="nombreUsuario">Usuario</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="nombreUsuario"
                value={nombreUsuario}
                name="nombreUsuario"
                onChange={(e) => setNombreUsuario(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="clave">Contraseña</label>
              <input
                type="password"
                className="form-control form-control-lg"
                name="clave"
                id="clave"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary btn-block">
                Iniciar Sesión
              </button>
            </div>

            {/* Muestra mensajes de error */}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {/* Muestra mensajes de éxito */}
            {success && <div className="alert alert-success mt-3">{success}</div>}

            <div className="text-center mt-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="recuperar-clave"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </form>
        </div>
        {showModal && <ForgotPasswordModal onClose={() => setShowModal(false)} />}
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
