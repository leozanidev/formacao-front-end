// 5 - Alterando o contexto
// import { useContext } from "react";
// Esse é importado todas as vez que for utilizado
// import { CounterContext } from "../context/CounterContext.jsx";

import ChangeCounter from "../components/ChangeCounter.jsx";

// Refatorando com HOOK //
// Importando o HOOK
import { useCounterContext } from "../hooks/useCounterContext.jsx";

// CONTEXTO MAIS COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  // Extraindo a propriedade color
  const { color, dispatch } = useTitleColorContext();

  // Criando função para alterar o valor da cor do título
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>HOME</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />

      {/* Alterando o Contexto Complexo */}
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    </div>
  );
};

export default Home;
