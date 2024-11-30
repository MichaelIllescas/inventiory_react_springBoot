import React from "react";
import "/src/styles/MenuProductos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import SectionCardsUsuarios from "./SectionCardsUsuarios";



const MenuUsuarios: React.FC  = () => {
    return(
        <div >
        <Navbar />
        <div className="bg-index container-fluid py-1 ">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Administración de Usuarios</h1>
        </div>
        <SectionCardsUsuarios />
        </div>
      
        <Footer />
      </div>



    );


};



export default MenuUsuarios;