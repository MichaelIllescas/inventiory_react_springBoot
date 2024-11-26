import React from "react";
import Navbar from "../Navbar/Navbar";
import "/src/styles/Index.css";
import Footer from "../Index/Footer";
import SectionCard from "./SectionCards";


const Index: React.FC = () => {
  return (
    <div >
      <Navbar />
      <div className="bg-index container-fluid py-1 ">
      <div className="typing-container titulo-main">
        <h1 className="typing-text text-center">Bienvenid@ a Inventiory!</h1>
      </div>
      <SectionCard />
      </div>
    
      <Footer />
    </div>
  );
};

export default Index;
