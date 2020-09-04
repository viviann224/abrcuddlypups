import React from "react";
import "./Card.css";
import { FaMapMarkerAlt, FaGift, FaDollarSign } from 'react-icons/fa';

function Card(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12  mb-3 mt-3 text-center">
      <div className="hovereffect">
          <img className="img-responsive w-100" src={props.img} alt=""/>
          <div className="overlay">
             <h2>{props.name}</h2>
             <p id="card-desc">{props.desc}</p>
             <p id="card-hover"><FaMapMarkerAlt style={{ fill: '#006064' }}/> {props.loc} |
            <FaDollarSign style={{ fill: '#006064' }}/> {props.donationsneeded} needed | 
            <FaGift style={{ fill: '#006064' }}/> {props.itemsneeded}</p>
             <a className="info" href={props.link}>Donate</a>
          </div>
      </div>
  </div>




  );
}

export default Card;
