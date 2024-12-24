// Eventos com React
const Events = () => {
  // Eventos com Função
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou!");
  };

  // Função de Renderização
  const renderSomething = (x) => {
    if(x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando aquilo!</h1>;
    }
  };

  return (
    <div>
        <h2>Eventos Com React</h2>
        <button onClick={() => console.log("Testando Evento!")}>Clique aqui</button>
        {/* Eventos com Função */}
        <h2>Evento com Função</h2>
        <button onClick={handleClick}>Clica em Mim!</button>
        {/* Função com Render */}
        <h2>Função com Render</h2>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  );
};

export default Events;