import React from "react";
import "/src/styles/MenuProductos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import SectionCardsVentas from "./SectionCardsVentas";



const MenuVentas: React.FC  = () => {
    return(
        <div >
        <Navbar />
        <div className="bg-index container-fluid py-1 ">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Administración de Ventas</h1>
        </div>
        <SectionCardsVentas />
        </div>
      
        <Footer />
      </div>



    );


};



export default MenuVentas;