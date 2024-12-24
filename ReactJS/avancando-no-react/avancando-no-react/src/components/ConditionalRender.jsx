// Renderização com Condicional

function ConditionalRender() {
    const x = true;
    const name = "Carlos";

    return (
        <div>
            {/* Render Condicional sem Else*/}
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true, sim!</p>}
            {/* Render Condicional com Else */}
            <h3>Render com Ternário(Quando há Else)</h3>
            {name === "Carlos" ?(
                <div>
                    <p>Olá, Carlos!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    );
};

export default ConditionalRender;