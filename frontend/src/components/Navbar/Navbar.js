import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "active" : "none",
    };
  };

  return (
    <div className="navbar">
          <img  alt="img" className="logo" src={require("../images/logo.png")}/>
        <ul className="nav-itens">

          <li>
            <NavLink id="link-menu" to={"/"} style={NavLinkStyles}>
              artist
            </NavLink>
          </li>
          <li>
            <NavLink id="link-menu" to={"/arts"} style={NavLinkStyles}>
            collection
            </NavLink>
          </li>
          <li>
            <NavLink id="link-menu" to={"/articles"} style={NavLinkStyles}>
              articles
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
