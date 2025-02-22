// Mostrando que o Context desse para outros componentes necessários
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// Modificando o CONTEXTO
// REFATORANDO COM HOOK
import { useCounterContext } from "../hooks/useCounterContext";
const ChangeCounter = () => {
  // Trazendo os dados para modificá-los
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}> Incrementar</button>
    </div>
  );
};

export default ChangeCounter;
