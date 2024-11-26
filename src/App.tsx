import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../public/LoginForm";
import Index from "./components/Index";
import MenuProductos from "./components/Productos/MenuProductos";
import ProductosRegistrados from "./components/Productos/ProductosRegistrados";
import AumentarPrecios from "./components/Productos/Aumentos";
import AplicarDescuentos from "./components/Productos/Descuentos";
import ActualizarStock from "./components/Productos/ActualizarStock";
import CrearProducto from "./components/Productos/CrearProducto";
import RegistrarCliente from "./components/Clientes/RegistrarCliente";
import TablaClientes from "./components/Clientes/TablaClientes";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/index" element={<Index />} />
      <Route path="/menuProductos" element={<MenuProductos />} />

      <Route path="/verProductos" element={<ProductosRegistrados />} />
      <Route path="/aplicarAumentos" element={<AumentarPrecios />} />
      <Route path="/aplicarDescuento" element={<AplicarDescuentos />} />
      <Route path="/actualizarStock" element={<ActualizarStock />} />
      <Route path="/crearProductos" element={<CrearProducto />} />
      <Route path="/registrarCliente" element={<RegistrarCliente />} />
      <Route path="/verClientes" element={<TablaClientes />} />

    </Routes>
  );
};

export default App;
