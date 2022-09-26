import React from "react";

export const Bebida = (props) => {
  return (
    <div className="card">
      <img
        src={props.bebida.strDrinkThumb}
        className="card-img-top"
        alt={props.bebida.strDrink}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.bebida.strDrink}</h5>
      </div>
    </div>
  );
};
