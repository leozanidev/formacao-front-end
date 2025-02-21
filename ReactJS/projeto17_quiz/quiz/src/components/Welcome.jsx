// Importando imagem
import Quiz from "../img/quiz.svg";

// Importando o Contexto e o Hook para utilizá-lo
import { useContext } from "react";
// Importamos o Context e não o Provider, pois, queremos consumir o contexto e não provê-lo
import { QuizContext } from "../context/quiz";

// Estilização do Componente
import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo agora iniciar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Começo do Quiz" />
    </div>
  );
};

export default Welcome;
