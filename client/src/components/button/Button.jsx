import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ title, text, image, id }) => {
  

  return (
    <Link to={`/${id}`}>
      <div className="nagadb__buttons-container__button">
        <div className="nagadb__buttons-container__button-image">
          <img src={image} alt="image" id={id} className='notHovered'/>
        </div>
        <div className="nagadb__buttons-container__button-title">
          <h1>{title}</h1>
        </div>
        <div className="nagadb__buttons-container__button-text">
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Button;
