import React from "react";
import Card from "../Index/Cards";
import "/src/styles/sectionCards.css"; 
import "/src/styles/Index.css"; 

const menuItems = [
  {
    title: "Informe de Ventas Mensuales",
    text: "Accede a las ventas mensuales registradas en el sistema.",
    imgSrc: "/public/verProductos.webp",
    altText: "Imagen de listado de ventas Mensuales",
    link: "/ventasMensuales",
    buttonText: "Ingresar",
  },
  {
    title: "Informe de Ventas Diarias",
    text: "Accede a las ventas diarias registradas en el sistema.",
    imgSrc: "/public/registrarProducto.webp",
    altText: "Imagen de listado de ventas diarias",
    link: "/verDiarias",
    buttonText: "Ingresar",
  },
  {
    title: "Productos más Vendidos",
    text: "Accede al listado de productos más vendidos en el mes.",
    imgSrc: "/public/registrarProducto.webp",
    altText: "Imagen de listado de ventas diarias",
    link: "/informeMensualProductos",
    buttonText: "Ingresar",
  },
];

const SectionCardsInformes: React.FC = () => {
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

export default SectionCardsInformes;
