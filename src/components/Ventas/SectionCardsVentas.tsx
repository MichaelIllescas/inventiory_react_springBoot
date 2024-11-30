import React from "react";
import Card from "../Index/Cards";

const menuItems = [
    {
      title: "Registrar Venta",
      text: "Registra una nueva venta en en el sistema.",
      imgSrc: "/public/verProductos.webp",
      altText: "Imagen de registrar venta",
      link: "/registrarVenta",
      buttonText: "Ingresar",
    },
    {
      title: "Ver Ventas Registradas",
      text: "Visualiza el listado general de ventas registradas.",
      imgSrc: "/public/registrarProducto.webp",
      altText: "Imagen de listado de ventas",
      link: "/verVentas",
      buttonText: "Ingresar",
    },
  ];
  

const SectionCardsVentas: React.FC = () => {

return (
    <section>
    <div className="container pb-5">
      <div className="row gx-4 gy-5 justify-content-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
          >
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
    </div>
  </section>
);
};

export default SectionCardsVentas;