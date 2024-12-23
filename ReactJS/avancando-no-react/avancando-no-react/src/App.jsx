import './App.css';
// Imagem em Assets
import night from './assets/night.jpg';
// Importando o useState
import Data from './components/Data'
// Renderização de Listas
import ListRender from './components/ListRender';
// Renderização Condicional
import ConditionalRender from './components/ConditionalRender';
// Props do Componente
import ShowUserName from './components/ShowUserName';
// Desestruturando Props
import CarDetails from './components/CarDetails';
// Renderização de Listas com Componente
const cars = [
  {id:1, brand:"Ferrari", color:"Amarelo", km: 0},
  {id:2, brand:"KIA", color:"Branco", km: 200000},
  {id:3, brand:"Renault", color:"Azul", km:32000}
];
// Fragments
import Fragment from './components/Fragment';
// Children
import Container from './components/Container';
// Função em Prop
import ExecuteFunction from './components/ExecuteFunction';
// State Lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';


function App() {
  // Função em Prop
  function showMessage() {
    console.log("Evento do Componente Pai");
  };

  // State Lift
  const[message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Quando a Imagem está na pasta Public */}
      <img src="/img.jpg" alt="Imagem de uma estrada a noite." />
      {/* Quando a Imagem está na pasta Assets */}
      <img src={night} alt="Uma noite bonita" />
      {/* HOOK useState */}
      <Data/>
      {/* Renderização de Listas */}
      <ListRender/>
      {/* Render Condicional */}
      <ConditionalRender/>
      {/* Props do Componente */}
      <ShowUserName name="Leonardo"/>
      {/* Desestruturando Props */}
      <CarDetails brand="Mercedez" km={10000} color="Azul-Marinho"/>
      {/* Reaproveitamento de Componentes */}
      <CarDetails  km={143000} brand="Fiat" color="Azul-Meia-Noite"/>
      <CarDetails brand="BMW" color="Cinza-Grafite" km={189000} />
      {/* Reaproveitamento Renderizando Componentes com LOOP */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.brand} km={car.km}/>
      ))}
      {/* Fragments */}
      <Fragment/>
      {/* Children */}
      <Container>
        <p>Alguma coisa!</p>
      </Container>
      <Container>
        <div>
          <h4>Este é meu componente com Children</h4>
          <p>Olá, crianças!</p>
        </div>
      </Container>
      {/* Função em Prop */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </>
  );
};

export default App;
