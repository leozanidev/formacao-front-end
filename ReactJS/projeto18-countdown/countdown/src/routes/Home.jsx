// Importando useState para salvar os valores
import { useContext, useState } from "react";

// Hook para redirecionar as páginas
import { useNavigate } from "react-router-dom";

// Importando o Contexto para manuseio dos dados
import { CountdownContext } from "../context/CountdownContext";

// Estilização da Página
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  // Inicializando o contexto para alterá-lo
  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };

    setEvent(eventObject);

    // Após receber os dados redireciona o usuário para o página do contador
    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Monte sua contagem Regressiva</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo do evento"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Data do Evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
