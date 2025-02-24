// Importando o HOOK
import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  //   Dessa maneira, sempre que o componente for re-renderizado,
  //   o useEffect será re-executado
  //   É a forma mais arriscada de se utilizar esse HOOK
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeOnSomething = () => {
    setNumber(number + 1);
  };

  // 2 - Array de Dependências VAZIO
  //  A ação vai ser executada uma única vez,
  //  tendo seu código executado na primeira renderização do componente
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  // 3 - Array de Dependências com Valores
  // Dessa forma, condicionamos a execução do useEffect a algo que está no array de dependências,
  // permitindo a reutilização controlada do hook
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando muda anotherNumber");
    }
  }, [anotherNumber]);

  //   4 - Cleanup do useEffect
  // Para evitar perca de perfomance com useEffect,
  // chamamos cleanup para limpar algumas ações
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Hello World!");
  //     setAnotherNumber(anotherNumber + 1);
  //   }, 2000);
  // Utilizamos para evitar o leak, vazamento, de informação entre componentes
  //   return () => clearTimeout(timer);
  // }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeOnSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(Math.random())}>
        Mudar Another Number
      </button>
    </div>
  );
};

export default HookUseEffect;
