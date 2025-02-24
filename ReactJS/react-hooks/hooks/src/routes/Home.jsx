import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
// Importamos o useCOntext para invocar o contexto
import { useContext } from "react";
// Importamos o contexto para consumi-lo
import { SomeContext } from "../components/HookUseContext";

import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHadle from "../components/HookUseImperativeHadle";
import HookCustom from "../components/HookCustom";

const Home = () => {
  // Desestruturamos o objeto criado no contexto, para pegar o contextValue
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>HOME</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHadle />
      <HookCustom />
    </div>
  );
};

export default Home;
