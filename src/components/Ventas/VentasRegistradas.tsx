import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import TablaVentas from "./TablaVentas";

const VentasRegistradas: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-index container-fluid py-1">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Ventas Registradas</h1>
        </div>
        
        <TablaVentas />

      </div>
      <Footer />
    </div>
  );
};

export default VentasRegistradas;
