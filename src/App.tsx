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
import RegistrarVenta from "./components/Ventas/RegistrarVenta";
import VentasRegistradas from "./components/Ventas/VentasRegistradas";
import InformeVentasMensuales from "./components/Informes/InformeVentasMensuales";
import InformeVentasDiarias from "./components/Informes/InformeVentasDiarias";
import InformeProductosMasVendidos from "./components/Informes/InformeMensualProductos";
import RegistrarUsuario from "./components/Usuarios/RegistroUsuarios";
import UsuariosRegistrados from "./components/Usuarios/TablaUsuarios";
import MenuClientes from "./components/Clientes/MenuClientes";
import MenuVentas from "./components/Ventas/MenuVentas";
import MenuInformes from "./components/Informes/MenuInformes";
import MenuUsuarios from "./components/Usuarios/MenuUsuarios";
import PanelEstadisticoVentasAnuales from "./components/Estadisticos/EstadisticoVentasAnuales";
import PanelBalancesTrimestrales from "./components/Estadisticos/PanelBalancesTrimestrales"; 

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/index" element={<Index />} />
      <Route path="/menuProductos" element={<MenuProductos />} />
      <Route path="/menuClientes" element={<MenuClientes />} />
      <Route path="/menuVentas" element={<MenuVentas />} />
      <Route path="/menuInformes" element={<MenuInformes />} />
      <Route path="/menuUsuarios" element={<MenuUsuarios />} />
      <Route path="/estadisticaAnual" element={<PanelEstadisticoVentasAnuales />} />
      <Route path="/balancesTrimestrales" element={<PanelBalancesTrimestrales/>} />


      <Route path="/verProductos" element={<ProductosRegistrados />} />
      <Route path="/aplicarAumentos" element={<AumentarPrecios />} />
      <Route path="/aplicarDescuento" element={<AplicarDescuentos />} />
      <Route path="/actualizarStock" element={<ActualizarStock />} />
      <Route path="/crearProductos" element={<CrearProducto />} />
      <Route path="/registrarCliente" element={<RegistrarCliente />} />
      <Route path="/verClientes" element={<TablaClientes />} />
      <Route path="/registrarVenta" element={<RegistrarVenta />} />
      <Route path="/verVentas" element={<VentasRegistradas />} />
      <Route path="/ventasMensuales" element={<InformeVentasMensuales />} />
      <Route path="/ventasDiarias" element={<InformeVentasDiarias />} />
      <Route path="/informeMensualProductos" element={<InformeProductosMasVendidos />} />
      <Route path="/registrarUsuario" element={<RegistrarUsuario />} />
      <Route path="/verUsuarios" element={<UsuariosRegistrados />} />
            <Route path="/verUsuarios" element={<UsuariosRegistrados />} />


      
      
    </Routes>
  );
};

export default App;
