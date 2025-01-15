import "./App.css";
// Importando OutLet para ser Componente base
import { Outlet } from "react-router-dom";
// Importando a Barra de Navegação para Link entre Páginas
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
