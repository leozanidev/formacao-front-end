// Importando Hooks necessários para mostrar detalhes dos produtos
import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <p>ID Do Produto: {id}</p>
      <div>
        <p>{product.name}</p>
        <p>R${product.price}</p>
        {/* Rotas Aninhadas */}
        <Link to={`/products/${product.id}/info`}>Mais informações</Link>
      </div>
    </div>
  );
};

export default Product;
