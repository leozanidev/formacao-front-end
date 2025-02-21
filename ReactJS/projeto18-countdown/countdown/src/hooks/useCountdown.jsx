// Importando o useState para armazenamento e manuseio dos dados
import { useState } from "react";

const useCountdown = (date) => {
  // Criando states para passar dados para o componente de app utilizar
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countdown = () => {
    // Extraindo a data:
    // 1 - em Objeto JS pelo Date(date)
    // 2 - em milissegundos pelo getTime
    const countDate = new Date(date).getTime();
    // Extraindo a data de hoje em milissegundos
    const now = new Date().getTime();

    const interval = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  };

  setInterval(countdown, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;
