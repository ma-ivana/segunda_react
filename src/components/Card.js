import React from 'react';
import './Card.css';
import truck from './truck-solid.svg';


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

        <h6>Condicion: {props.info.condition}</h6>
      </div>
      
        {props.info.free_shipping === true &&  // puede sacar "=== true" porque es lo implícito
        <div className="truck">
        <img src={truck} className="truck-img" className="filter-green"/>
        </div>}
        </div>
      
      </div>
      </div>
    
  );
};

export default Card;
