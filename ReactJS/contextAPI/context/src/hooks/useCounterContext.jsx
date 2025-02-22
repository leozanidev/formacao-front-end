// Refatorando o Context:
// Criar um Hook para trabalhar o contexto de forma a concentrar
// o useContext somente em um local ( o próprio hook )
// e criando, assim, uma oportunidade para validação na alteração do contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// Exportando o hook
export const useCounterContext = () => {
  // Invocando o contexto para poder alterá-lo
  const context = useContext(CounterContext);

  //   Possibilidade de fazer uma, ou mais, verificações
  if (!context) {
    console.log("Contexto não encontrado!");
    return;
  }

  console.log(context);
  return context;
};
