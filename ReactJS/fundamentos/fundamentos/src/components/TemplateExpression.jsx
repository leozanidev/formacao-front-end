// Template Expressions: executam JS entre "{}" dentro do JSX
const TemplateExpression = () => {
    const name = "Leonardo";
    const data = {
        age: 20,
        job: "Médico"
    };

    return (
        <div>
            <h2>TemplateExpression</h2>
            <p>Bem-vindo, {name}!</p>
            <p>Você tem {data.age} anos e já é {data.job}, UAU!</p>
            <p>A soma é {2+2}</p>
        </div>
    );
};

export default TemplateExpression;