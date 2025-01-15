import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Importando OutLet para uso de Componente Base
import { Outlet } from "react-router-dom";
// Importando a Barra de Navegação com Link Entre Páginas
import Navbar from "./components/Navbar";
// Search Params
import SearchForm from "./components/SearchForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
