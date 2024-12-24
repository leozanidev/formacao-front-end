import './App.css';
// CSS de Componente
import MyComponent from './components/MyComponent';
// CSS Module
import Title from './components/Title';


function App() {
  // CSS Dinâmico
  const x = 10;
  // Classe Dinâmica
  const redTitle = true;
  const title = false;

  return (
    <>
      {/* CSS Global */}
      <h1>CSS no React</h1>
      {/* CSS De Componente */}
      <MyComponent/>
      <p>Pegou o CSS do componente!</p>
      {/* Estilos Inline */}
      <p style={{color: "red", padding:"10px", borderTop:"2px solid red"}}>Este elemento tem estilos Inline</p>
      {/* Estilos Inline Dinâmicos */}
      <h2 style={x===10 ? {color:"purple"} : {color:"gray"}}>
        CSS Dinâmico
      </h2>
      <h2 style={x>10 ? {color:"purple"} : {color:"gray"}}>
        CSS Dinâmico 2
      </h2>
      {/* Classes Dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título tem uma classe</h2>
      <h2 className={title ? "red-title" : "title"}>Esse título tem outra classe</h2>
      {/* CSS Modules */}
      <Title/>
    </>
  );
};

export default App;
