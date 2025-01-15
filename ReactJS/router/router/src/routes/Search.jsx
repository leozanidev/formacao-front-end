// SEARCH PARAMS
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  //   Desestruturando para pegar o que esta em Search Params
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  //   Mudança de Ordem para o useFetch usar a URL correta
  const { data: items } = useFetch(url);

  return (
    <div>
      Resultados da Pesquisa:
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

export default Search;
