// Importando o HOOK
import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - Exemplo Simples
  /*  State: valor atual dos dados
    Action: parâmetros/ o que vai ser feito para mudar nos dados */
  /* Sugerido para casos de uso mais complexo.
   Podemos construir uma função para mudança de dados */
  /* Geralmente usamos o useReducer com um switch
  para aplicações mais complexas */
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - Avançando com useReducer, exemplo mais complexo
  const initialTasks = [
    { id: 1, text: "Fazer coisa 1!" },
    { id: 2, text: "Fazer coisa 2!" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default HookUseReducer;
