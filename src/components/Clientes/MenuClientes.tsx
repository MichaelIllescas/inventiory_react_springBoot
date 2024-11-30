import React from "react";
import "/src/styles/MenuProductos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import SectionCardsClientes from "./SectionCardsClientes";



const MenuClientes: React.FC  = () => {
    return(
        <div className="content">
        <Navbar />
        <div className="bg-index container-fluid py-1">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Gestión de Clientes</h1>
        </div>
        <SectionCardsClientes />
        </div>
      
        <Footer />
      </div>



    );


};



export default MenuClientes;