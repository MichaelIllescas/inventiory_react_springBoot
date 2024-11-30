import React from "react";
import "/src/styles/Logo.css";


const Logo: React.FC = () => {
  return (
    <a className="navbar-brand" >
      <img
        src="/public/logoInventiory-removebg-preview.png"
        className="rounded-pill logo-animation shadow img-fluid bg-black logo"
        alt="Logo"
      />
    </a>
  );
};

export default Logo;
