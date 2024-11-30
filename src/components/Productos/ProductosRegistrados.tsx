import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import  TablaProductos from "./TablaProductos";

const ProductosRegistrados: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-index container-fluid py-1 h-100">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Productos Registrados!</h1>
        </div>
        < TablaProductos />
      </div>
      
      <div>
      
      </div>
      <Footer />
    </div>
  );
};

export default ProductosRegistrados;
