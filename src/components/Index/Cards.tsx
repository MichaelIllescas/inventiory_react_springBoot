import React from "react";
import { Link } from "react-router-dom";

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
    <div className="card mx-auto" style={{ width: "12rem", height: "18rem" }}>
      <img
        src={imgSrc}
        className="card-img-top img-fluid"
        alt={altText}
        style={{
          height: "8rem",
          objectFit: "cover",
          borderTopLeftRadius: "calc(0.25rem - 1px)",
          borderTopRightRadius: "calc(0.25rem - 1px)",
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ fontSize: "17.5px", marginBottom: "0.5rem" }}>
          {title}
        </h5>
        <p className="card-text flex-grow-1" style={{ fontSize: "12px", marginBottom: "1rem" }}>
          {text}
        </p>
        <Link
          to={link}
          className="btn btn-primary mt-auto"
          style={{ fontSize: "11px", padding: "5px 8px" }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
