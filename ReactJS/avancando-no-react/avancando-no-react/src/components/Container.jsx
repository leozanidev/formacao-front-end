// Componente com Children

function Container({children}) {
  return (
    <div>
        <h1>Conteúdo do Componente Pai:</h1>
        {children}
    </div>
  );
};

export default Container;