import React from "react";
import logo from "./abr-logo.png";
import "./Navbar.css";
import { FaPaw, FaAmazon, FaInstagram, FaFacebook } from 'react-icons/fa';

function Navbar() {
  return (

    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white mb-3">
      <a className="navbar-brand" href="https://austinbulldogrescue.com/">
    <img src={logo} width="30" height="30" className="d-inline-block align-top logo" alt=""/>
    <strong>Austin Bulldog Rescue</strong>
  </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-center" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="https://austinbulldogrescue.com/available-dogs/">Adoptable Dogs <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="https://austinbulldogrescue.com/foster/">Foster<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="          https://smile.amazon.com/hz/charitylist/ls/2ZAIV63R4VLG0/ref=smi_ext_lnk_lcl_cl
">Amazon Wishlist <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://austinbulldogrescue.com/donate/">Make A Donation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://austinbulldogrescue.com/about-austin-bulldog-rescue-abr/" tabIndex="-1">About Us</a>
          </li>
        </ul>

        <span className="navbar-text mr-1">
      <a href="https://www.instagram.com/austin_bulldog_rescue/"><FaInstagram style={{ fill: '#006064' }}/></a>
    </span>
    <span className="navbar-text mr-1">
  <a href="https://www.facebook.com/AustinBulldogRescue/"><FaFacebook style={{ fill: '#006064' }}/></a>
</span>

      </div>
    </nav>
  );
}

export default Navbar;
