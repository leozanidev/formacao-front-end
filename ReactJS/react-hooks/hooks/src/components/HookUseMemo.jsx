import { useState, useEffect, useMemo } from "react";
const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //  const premiumNumbers = ["0", "100", "200"];
  //  Dessa forma, ao digitar numeros que não existem,
  //  a expressão não é validada e nem disparada
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);
  useEffect(() => {
    console.log("Premium Number foi alterado");
  }, [premiumNumbers]);
  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? (
        <p>Acertou o número!</p>
      ) : (
        <p>Errou o número!</p>
      )}
    </div>
  );
};

export default HookUseMemo;
