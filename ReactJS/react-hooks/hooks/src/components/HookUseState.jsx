// 1 - Importe o Hook
import { useState } from "react";

const HookUseState = () => {
  // Utilização mais básica: ter um dado para ser gerenciado
  const [name, setName] = useState("Leonardo");

  let userName = "Carlos";

  //   Função para mudar nomes
  const changeNames = () => {
    userName = "Carlos Miguel de Albuquerque";
    setName("Leonardo Zani de Souza");
    /* O hook consegue re-renderizar onde o valor foi alterado
    mas não consegue as variáveis */
  };

  //   USESTATE COM INPUTS
  const [age, setAge] = useState(20);
  //   Simulando envio para uma API
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ages);
  };
  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>useState: {name}</p>
      <p>Variávels: {userName}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      {/* useState com Input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />
    </div>
  );
  /* Logo, concluímos que o uso de useState é para mudança
  de valores e não, somente, exibição de variável */
};

export default HookUseState;
