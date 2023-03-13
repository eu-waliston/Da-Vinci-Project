import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "active" : "none"
    };
  };

  return (
    <>
      <NAVBAR>
        <img src={require("../images/logo.png")} alt="logo" className="logo" />
        <ul>
          <li>
            <NavLink id="link-menu" to={"/"} style={NavLinkStyles}>
              artist
            </NavLink>
          </li>
          <li>
            <NavLink id="link-menu" to={"/arts"} style={NavLinkStyles}>
              arts
            </NavLink>
          </li>
          <li>
            <NavLink id="link-menu" to={"/articles"} style={NavLinkStyles}>
              articles
            </NavLink>
          </li>
        </ul>
      </NAVBAR>
    </>
  );
};

const NAVBAR = styled.div`
  .active {
    text-decoration: underline;
    transition: 0.5s;
  }
  position: fixed;
  z-index: 999;
  color: #fff;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    gap: 50px;
    position: relative;
    left: 60%;
    top: -150px;
    > li,
    #link-menu {
      list-style: none;
      font-size: 1.3rem;
      font-family: "Cinzel", serif;
      transition: 0.5s;
      color: #fff;
      text-underline-offset: 12px;

      &:hover {
        cursor: pointer;
        transform: translateY(5px);
      }
    }
  }

  .logo {
    width: 250px;
    position: relative;
    left: 12%;
  }
`;

export default Navbar;
