import React from "react";
import useBebidas from "../hooks/useBebidas.jsx";
import { Bebida } from "./Bebida.jsx";

export const ListadoBebidas = () => {
  const { bebidas } = useBebidas();

  return (
    <div className="container">
      <div className="row">
        {bebidas.map((valor) => (
          <div className="col listado" key={valor.idDrink}>
            <Bebida bebida={valor} />
          </div>
        ))}
      </div>
    </div>
  );
};
