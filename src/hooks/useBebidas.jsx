import { useContext } from "react";
import BebidasContext from "../context/BebidasProvider.jsx";

const useBebidas = () => {
  return useContext(BebidasContext);
};

export default useBebidas;
