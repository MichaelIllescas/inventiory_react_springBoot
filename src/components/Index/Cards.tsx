import React from "react";

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
  altText: string;
  link: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  title,
  text,
  imgSrc,
  altText,
  link,
  buttonText,
}) => {
  return (
    <div className="card mx-auto" style={{ width: "18rem", height: "24rem" }}>
      <img
        src={imgSrc}
        className="card-img-top"
        alt={altText}
        style={{ height: "12rem", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <a href={link} className="btn btn-primary mt-auto">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
