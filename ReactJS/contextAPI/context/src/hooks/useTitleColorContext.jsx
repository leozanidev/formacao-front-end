// Simplificando o uso do contexto
import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorCOntext";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log("Contexto não encontrado!");
  }

  return context;
};
