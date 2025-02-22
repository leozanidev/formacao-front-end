// CRIANDO O CONTEXT //
// 1 - Importar o createContext
import { createContext, useState } from "react";

// 2 - Exportar o context com a invocação da função createContext
export const CounterContext = createContext();

//  1 + 2: Criada a possibilidade de prover o contexto para a aplicação,
// exportando o Context para consumo nos componentes

// 3 - Criando o Provider
export const CounterContextProvider = ({ children }) => {
  // Algo que será controlado, valor de contexto
  const [counter, setCounter] = useState(5);

  return (
    /* Retornando um objeto, usando Provider para encapsular o children e
     a prop value que carrega tudo que deve ser transmitido entre os componentes
     Nesse caso levamos o counter para acessar valor e o setCounter para alterar valor
     */
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
