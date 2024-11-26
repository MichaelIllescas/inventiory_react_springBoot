import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import "/src/styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg green-gradient-text animated--grow-in">
      <div className="container ">
        <Logo />
        <button
          className="animated--grow-in btn btn-secondary bg-gradient-dark rounded-circle p-2 d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse animated--grow-in justify-content-around" id="navbarNav">
          <NavLinks />
          <div>
          <ul className="navbar-nav ml-auto ">
            <Notifications />
            <UserMenu />
          </ul>
          </div>
        </div>
      </div>
      
          
    </nav>
    
  );
};

export default Navbar;
