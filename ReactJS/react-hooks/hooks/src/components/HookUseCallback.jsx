// Importando o HOOK
import { useCallback, useState } from "react";
// Importando o componente onde sera usado
import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
    </div>
  );
};

export default HookUseCallback;
