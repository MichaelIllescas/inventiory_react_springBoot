import React from "react";
import Card from "./Cards"; 
import "/src/styles/sectionCards.css";

const cardsData = [
  {
    title: "Productos",
    description: "Gestiona tus productos de manera eficiente.",
    link: "/menuProductos",
    imgSrc: "/public/productos.webp",
  },
  {
    title: "Clientes",
    description: "Administra la información de tus clientes.",
    link: "/menuClientes",
    imgSrc: "/public/clientes.png",
  },
  {
    title: "Ventas",
    description: "Registra y consulta tus ventas realizadas.",
    link: "/menuVentas",
    imgSrc: "/public/ventas.png",
  },
  {
    title: "Informes",
    description: "Genera informes detallados.",
    link: "/menuInformes",
    imgSrc: "/public/informes.png",
  },
  {
    title: "Usuarios",
    description: "Gestiona los usuarios del sistema.",
    link: "/menuUsuarios",
    imgSrc: "/public/usuarios.png",
  },
];

const SectionCard: React.FC = () => {
  return (
    <section className="content-section p-3 m-auto" id="portfolio">
      <div className="container m-auto">
        <div className="row gx-4 gy-5">
          {cardsData.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <Card
                title={card.title}
                text={card.description} // Ajuste: Pasamos `text` como descripción
                link={card.link}
                imgSrc={card.imgSrc}
                altText={card.title}
                buttonText="Ingresar"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
