import { useState } from "react"

export const ListRender = () => {
    const [list] = useState(["Léo", "Leonardo", "Léozinho"]);

    // Propriedade KEY
    const [users, setUsers] = useState([
        {id: 1, name: "Leonardo", age: 20},
        {id: 2, name: "José", age: 21},
        {id: 3, name: "Antônio", age: 19},
    ]);

    // Função para o exemplo de Previous State
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));
    };

    return (
        <div>
            {/* Render sem Prop. KEY */}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            {/* Render com a Prop. KEY */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
            {/* Previous State*/}
            <button onClick={deleteRandom}>Deletar usuário aleatório!</button>
        </div>
    );
};

export default ListRender;