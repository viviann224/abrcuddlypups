import React from "react";
import logo from "./abr-logo.png";
import "./Navbar.css";
import { FaPaw, FaAmazon } from 'react-icons/fa';

function Navbar() {
  return (

<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="" loading="lazy"/>
   Spotlight ABR Pups <FaPaw /><FaAmazon /> 
  </a>
</nav>
  );
}

export default Navbar;