// Criando um Contexto mais complexo
// Para isso usamos o useReducer, que funciona como um useState, porém, nos traz mais possibilidades
import { createContext, useReducer } from "react";

// Exportando o contexto
export const TitleColorContext = createContext();

// Criando o REDUCER
export const titleColorReducer = (state, action) => {
  // Aqui dentro vai a lógica de modificação de estado
  //   Pra isso, usamos um SWITCH que vai verificar o tipo da ação
  switch (action.type) {
    case "RED":
      // retorno todo o state, com spread operator, mas altero somente o que eu quero através da ação
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      // retorna o state sem modificações
      return state;
  }
};

// Criando o Provider para o Contexto
export const TitleColorContextProvider = ({ children }) => {
  // o REDUCER é utilizado como base de dados para o nosso reducer
  // Iniciamos o useReducer com valores iniciais
  const [state, dispatch] = useReducer(titleColorReducer, { color: "orange" });
  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {/* Passamos todas as propriedades do state*/}
      {children}
    </TitleColorContext.Provider>
  );
};
