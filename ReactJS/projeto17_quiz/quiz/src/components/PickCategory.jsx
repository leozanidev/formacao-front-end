import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./PickCategory.css";

import Category from "../img/category.svg";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  };
  return (
    <div id="category">
      <h2>Escolha uma Categoria</h2>
      <p>As perguntas serão em uma das seguintes linguagens:</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="Categorias para o quizz" />
    </div>
  );
};

export default PickCategory;
