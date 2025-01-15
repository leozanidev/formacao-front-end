import React from "react";

// Carreagamento de Dados
import { useFetch } from "../hooks/useFetch";
// Importando Link para o uso de Rotas Dinâmicas
import { Link } from "react-router-dom";
// Constante que recebe o caminho para o servidor
const url = "http://localhost:3000/products";
const Home = () => {
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>HOME</h1>
      {/* Carregando os Dados na página */}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
              {/* Rota Dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
