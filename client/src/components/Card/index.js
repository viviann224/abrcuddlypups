import React from "react";
import "./Card.css";
import { FaPaw, FaAmazon } from 'react-icons/fa';

function Card() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12  mb-3 mt-3 text-center">
      <div className="hovereffect">
          <img className="img-responsive w-100" src="https://imgstore.cuddly.com/imgsrv/poundwishes/images/Pets/Small/4156194-15945278998298_photo.png?h=330&fit=contain" alt=""/>
          <div className="overlay">
             <h2>Blue</h2>
             <a className="info" href="https://cuddly.com/donate/4156194/blue">Donate</a>
          </div>
      </div>
  </div>




  );
}

export default Card;
