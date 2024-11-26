import React from "react";
import Card from "../Index/Cards";

const menuItems = [
    {
      title: "Ver Productos Registrados",
      text: "Explora todos los productos registrados en el sistema.",
      imgSrc: "/public/verProductos.webp",
      altText: "Imagen de productos registrados",
      link: "/verProductos",
      buttonText: "Ingresar",
    },
    {
      title: "Registrar Nuevo Producto",
      text: "Añade nuevos productos al catálogo con facilidad.",
      imgSrc: "/public/registrarProducto.webp",
      altText: "Imagen de registrar producto",
      link: "/crearProductos",
      buttonText: "Ingresar",
    },
    {
      title: "Actualizar Stock",
      text: "Gestiona el inventario de productos de manera eficiente.",
      imgSrc: "/public/actualizarStock.webp",
      altText: "Imagen de actualizar stock",
      link: "/actualizarStock",
      buttonText: "Ingresar",
    },
    {
      title: "Aumento de Precios",
      text: "Aplica incrementos a los precios de tus productos.",
      imgSrc: "/public/aumentos.webp",
      altText: "Imagen de aumento de precios",
      link: "/aplicarAumentos",
      buttonText: "Ingresar",
    },
    {
      title: "Descuento de Precios",
      text: "Aplica descuentos a los precios de tus productos.",
      imgSrc: "/public/descuentos.webp",
      altText: "Imagen de descuento de precios",
      link: "/aplicarDescuento",
      buttonText: "Ingresar",
    },
  ];
  

const SectionCardsProductos: React.FC = () => {

return (
    <section>
    <div className="container pb-5">
      <div className="row gx-4 gy-5 ">
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

export default SectionCardsProductos;