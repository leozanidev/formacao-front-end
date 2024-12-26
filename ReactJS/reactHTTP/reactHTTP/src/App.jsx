// Importações necessárias para resgatar dados
import { useState, useEffect } from "react";

// URL da nossa API
const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  // Resgatando Dados
  const [products, setProducts] = useState([]);

  // Enviando Dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Pegando Dados
  useEffect(() => {
    async function getData() {
      const res = await fetch(url);

      const data = await res.json();

      console.log(data);

      setProducts(data);
    }

    getData();
  }, []);

  // Função de Resgatar Dados e fazer o Envio
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    // Carregamento dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <>
      <h1>HTTP com React</h1>
      {/* Resgatando Dados de um Banco */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: R${product.price}
          </li>
        ))}
      </ul>
      {/* Adicionando Dados ao Banco */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default App;
