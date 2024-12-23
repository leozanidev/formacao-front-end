// Criando um Form
import "./MyForm.css"
// Salvando dados do Input com State
import { useState } from "react";

function MyForm({userName, userEmail}) {
    // Gerenciamento de Dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // Envio de Formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);
        // Validação
        // Envio

        // Limpar form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };


    return (
        <div>
            {/* Criando o FORM */}
            {/* Envio de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        // Controlled Input
                        value={name}
                    />
                </div>
                {/* Label envolvendo o Input */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite seu E-mail"
                        // Simplificando a Manipulação
                        onChange={(e) => setEmail(e.target.value)}
                        // Controlled Input
                        value={email || ""}
                    />
                </label>
                {/* Textarea */}
                <label>
                    <span>Biografia:</span>
                    <textarea
                        name="bio"
                        placeholder="Descrição do usuário..."
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    >
                    </textarea>
                </label>
                {/* Select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
};

export default MyForm;