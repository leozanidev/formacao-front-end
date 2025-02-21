// Componentes
import { Outlet } from "react-router-dom";

// Imagem de Fundo Padrão
import NewYear from "./assets/newyear.jpg";

// Importando o Contexto
import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

import "./App.css";

function App() {
  const { event } = useContext(CountdownContext);
  // Para verificar se foi passado uma imagem
  let eventImage = null;
  if (event) eventImage = event.image;

  return (
    <div
      className="App"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${NewYear})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
