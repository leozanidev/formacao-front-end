// Componentes
import Title from "../components/Title";
import Counter from "../components/Counter";
import { Navigate } from "react-router-dom";

// Importando Hook
import useCountdown from "../hooks/useCountdown";

// Importando o Contexto
import { CountdownContext } from "../context/CountdownContext";
import { useContext } from "react";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  // Usando dados do evento
  const eventTitle = event.title;
  const eventColor = event.color;
  const [day, hour, minute, second] = useCountdown(event.date);
  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
