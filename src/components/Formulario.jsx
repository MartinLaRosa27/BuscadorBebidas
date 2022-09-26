import React, { useState } from "react";
import useCategorias from "../hooks/useCategorias.jsx";
import useBebidas from "../hooks/useBebidas.jsx";

export const Formulario = () => {
  const { categorias } = useCategorias();
  const { consultarBebida } = useBebidas();

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si un str es vacio:
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos osn obligatorios");
      return;
    }
    setAlerta("");
    consultarBebida(busqueda);
  };

  return (
    <div className="row">
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* ALERTA */}
        {alerta && (
          <div className="alert alert-danger" role="alert">
            {alerta}
          </div>
        )}
        {/* NOMBRE */}
        <div className="mb-3">
          <label className="form-label">Nombre Bebida</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Ej: Tequila, Vodka, etc"
            value={busqueda.nombre}
            onChange={(e) => {
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              });
            }}
          ></input>
        </div>
        {/* CATEGORIA */}
        <div className="mb-3">
          <label className="form-label">Categoria Bebida</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="categoria"
            value={busqueda.categoria}
            onChange={(e) => {
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              });
            }}
          >
            <option defaultValue="0">Selecciona Categoria</option>
            {categorias.map((valor) => (
              <option value={valor.strCategory} key={valor.strCategory}>
                {valor.strCategory}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn btn-danger text-uppercase"
        >
          Buscar Bebidas
        </button>
      </form>
    </div>
  );
};
