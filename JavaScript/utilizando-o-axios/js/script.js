// Axios éuma biblioteca JS para requisições HTTP;
// É Promise Based, ou seja, retorna promessas de suas funções;
// Facilita o trabalho com APIs e requisições assíncronas;
// Perdeu notoriedade para o recurso fetch do JS;

// Confirmando instalação
// console.log(axios);

// Nosso primeiro request (Request: solicitação de informações para servidores externos)
const getData = async() => {
    try {
        const response = await postsFetch.get(
            "/users",
            // Configurando Headers ( cabeçalhos das requisições )
            {
                headers: {
                    "Content-Type": "application/json",
                    custom: "header",
                }
            }
        );
        console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
    }
}; /* Podemos verificar os requests e a interação com a API na aba Network, no Inspecionar Página */

getData();

// Imprimindo dados das APIs
const container = document.querySelector("#user-container");

const printData = async() => {
    const data = await getData();
    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);

        container.appendChild(div);
    });
}

printData();


// Requisição de Post (Post: método http para enviar dados para o servidor);
// Utilizando Axios podemos fazer tudo sem recarregar a página e, dessa forma, mantendo a experiência do usuário;
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    });
});

// Global Instance: mudamos diretamente as configurações do Axios, permitindo que trabalhemos com os mesmos parâmetros em todas requisições;
// Pra isso, criaremos um arquivo separado, geralmente nomeado global.js;

// Custom Instance: mais voltada à personalização do projeto, não é recomendado utilizar as duas INSTANCES juntas;
// Utilizar as duas causaria redundancia e trabalho em dobro;

// Interceptors: podemos inserir códigos entre a requisição e a resposta;
