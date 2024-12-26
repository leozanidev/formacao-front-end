// Importações necessárias para Resgatar dados
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  // Resgatando dados
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Carregando...");
  }, []);

  return (
    <>
      <h1>HTTP com React</h1>
      {/* useEffect: controla a execução de uma ação */}
      {/* Resgatando dados com React */}
    </>
  );
}

export default App;
