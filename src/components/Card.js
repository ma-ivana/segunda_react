import React from 'react';
import './Card.css';
import truck from '../img/truck-solid.svg';
import envio_pago from '../img/Dollar-512.png';


const Card = props => {
  console.log(props)
  return (
    
    <div className="card">
      <div className="img-miniatura">
        <img className="miniatura" src={props.info.thumbnail}></img>
        </div>
        <div>
        <h5>{props.info.title}</h5>

        
        <h6>Precio: ${props.info.price}</h6>

        <div className="info-section">
        <div className="info">

        <h6>Condición: {
          props.info.condition === "new"
          ? "nuevo" 
          : "usado"
          }</h6>
      </div>
      
        <div className="shipping">
          {props.info.free_shipping
            ? <img src={truck} className="truck-img" className="filter-green"/>
            : <img alt="envio pago" src={envio_pago} className="envio_pago"/>
        }
        </div>
        </div>
      
      </div>
      </div>
    
  );
};

export default Card;
