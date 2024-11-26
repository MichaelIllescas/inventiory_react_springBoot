import React from "react";
import "/src/styles/MenuProductos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import SectionCardsProductos from "./SectionCardsProductos";



const MenuProductos: React.FC  = () => {
    return(
        <div >
        <Navbar />
        <div className="bg-index container-fluid py-1 ">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Gestión de Productos</h1>
        </div>
        <SectionCardsProductos />
        </div>
      
        <Footer />
      </div>



    );


};



export default MenuProductos;