// 5 - Alterando o contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";
// Esse é importado todas as vez que for utilizado

// REFATORANDO COM HOOK //
import { useCounterContext } from "../hooks/useCounterContext.jsx";

// CONTEXTO MAIS COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Contact = () => {
  // Ativando o hook e desestruturando o counter
  const { counter } = useCounterContext();

  //Extraindo a propriedade color
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página de Contato</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Contact;
