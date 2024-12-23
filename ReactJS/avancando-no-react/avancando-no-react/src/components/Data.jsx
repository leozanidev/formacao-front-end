// HOOK - useState
import { useState } from "react";

function Data() {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);
    const [name, setName] = useState("Léo");

    return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick ={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mudar o State</button>
        </div>
        <div>
            <p>Nome: {name}</p>
            <button onClick={() => setName("Leonardo")}>Mudar nome</button>
        </div>
    </div>
  );
};

export default Data;