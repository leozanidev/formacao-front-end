// Desestruturando Props dos Componentes

function CarDetails({brand, km, color}) {
  return (
    <div>
        <h2>Detalhes do Carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Quilometragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  );
};

export default CarDetails;