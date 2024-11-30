import React from "react";
import Card from "../Index/Cards"; // Asegúrate de que el path sea correcto
import "/src/styles/sectionCards.css"; // Reutiliza los estilos existentes

const menuItems = [
  {
    title: "Registrar Usuario",
    text: "Registra a un nuevo usuario en el sistema.",
    imgSrc: "/public/verProductos.webp",
    altText: "Imagen de registrar Usuarios",
    link: "/registrarUsuario",
    buttonText: "Ingresar",
  },
  {
    title: "Ver Usuarios",
    text: "Ver listado de Usuarios registrados en el sistema.",
    imgSrc: "/public/usuarios.png",
    altText: "Imagen de ver usuarios registrados",
    link: "/verUsuarios",
    buttonText: "Ingresar",
  },
];

const SectionCardsUsuarios: React.FC = () => {
  return (
    <section>
      <div className="cards-container">
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

export default SectionCardsUsuarios;
