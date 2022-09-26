import { Formulario } from "./components/Formulario.jsx";
import { CategoriasProvider } from "./context/CategoriasProvider.jsx";
import { BebidasProvider } from "./context/BebidasProvider.jsx";
import { ListadoBebidas } from "./components/ListadoBebidas.jsx";

function App() {
  return (
    <>
      <CategoriasProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Buscador Bebidas Web</h1>
          </header>
          <div className="container mt-5">
            <Formulario />
            <ListadoBebidas />
          </div>
        </BebidasProvider>
      </CategoriasProvider>
    </>
  );
}

export default App;
