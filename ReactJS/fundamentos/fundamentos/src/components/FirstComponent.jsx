import MyComponent from "./MyComponent";

// Criando componentes
const FirstComponent = () => {
    return (
        <div>
            {/* Comandos JSX devem ter no máximo um elemento pai */}
            <h2>Meu primeiro componente!</h2>
            <MyComponent/>
        </div>
    );
};

// Exportando componentes
export default FirstComponent;