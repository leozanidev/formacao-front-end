import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousvalue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Valor atual:{number}</p>
      <p>Anterior: {previousvalue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar!</button>
    </div>
  );
};

export default HookCustom;
