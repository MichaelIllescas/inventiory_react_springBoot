import React from "react";
import "/src/styles/MenuProductos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Index/Footer";
import SectionCardsInformes from "./SectionCardsInformes";



const MenuInformes: React.FC  = () => {
    return(
        <div className="content" >
        <Navbar />
        <div className="bg-index container-fluid py-1 ">
        <div className="typing-container titulo-main">
          <h1 className="typing-text text-center">Gestión de Informes</h1>
        </div>
        <SectionCardsInformes />
        </div>
      
        <Footer />
      </div>



    );


};



export default MenuInformes;