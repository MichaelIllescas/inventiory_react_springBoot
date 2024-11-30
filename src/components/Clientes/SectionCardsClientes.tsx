import React from "react";
import Card from "../Index/Cards";
import "/src/styles/Index.css";

const menuItems = [
  {
    title: "Registrar Cliente",
    text: "Registra a un nuevo cliente en el sistema.",
    imgSrc: "/public/verProductos.webp",
    altText: "Imagen de registrar clientes",
    link: "/registrarCliente",
    buttonText: "Ingresar",
  },
  {
    title: "Ver Clientes",
    text: "Ver listado de clientes registrados en el sistema.",
    imgSrc: "/public/registrarProducto.webp",
    altText: "Imagen de ver clientes registrados",
    link: "/verClientes",
    buttonText: "Ingresar",
  },
];

const SectionCardsClientes: React.FC = () => {
  return (
    <section>
      <div className="cards-container d-flex justify-content-center">
        {menuItems.map((item, index) => (
          <div className="card-wrapper" key={index}>
            <Card
              title={item.title}
              text={item.text}
              imgSrc={item.imgSrc}
              altText={item.altText}
              link={item.link}
              buttonText={item.buttonText}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCardsClientes;
