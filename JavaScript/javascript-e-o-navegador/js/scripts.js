// Composição dos URLS's
// protocolo://domínio/arquivo-ou-página
// Ultimamente pode ser escondida a última parte por questões de segurança e estética.

/* HTML é uma linguagem de marcação, não de programação
Isso se dá pela falta de componentes que tem numa ling. de programação */
// CSS acrescenta ao HTML aidentidade visual das marcas.

// No head do HTML, nós inserimos as configurações da página
// No body, colocamos as informações que o usuário verá
// Tags possuem atributos que servem para configurar os elementos
// Tudo citado até agora pode ser alterado pelo JS.

// Adicionamos o JS no HTML por meio da tag script
// OS links entre arquivos são executados por meio de Chamadas HTTP
// Com JS no HTML podemos manipular elementos e alterar estilos.

// o DOM é uma representação fiel do HTML da página
// Com ele, nós acessamos o HTML através do JS
// Podemos modificá-lo com métodos e propriedades de Objetos que alteram o DOM
// Document Object Model
// Através dele podemos, também, atrelar eventos ao HTML.

// Acessando o DOM podemos modificar completamente uma página
// Ele cria uma árvore do HTML, onde os elementos são chamados de NÓS

// Todos elementos podem ser acessados através do document.body
// Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// Selecionando Elementos
/* Por TAG */
const listItens = document.getElementsByTagName("li");
console.log(listItens);

/* Por ID */
const title = document.getElementById("title");
console.log(title);

/* Por CLASS */
const products = document.getElementsByClassName("product");
console.log(products);

/* Por SELETOR CSS*/
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// Alterando o HTML
/* Método INSERTBEFORE */
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

/* Método APPENDCHILD */
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");

navLinks.appendChild(li);

/* Método REPLACECHILD */
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);

/* Criando Nós de TEXTO */
const myText = document.createTextNode("Vamos colocar mais um título");
console.log(myText);

const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);

mainContainer.appendChild(h3);

// Alterando Atributos
const firstLink = navLinks.querySelector("a");/* Esse método só seleciona o primeiro elemento */
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target", "_blank");

// Altura e Largura dos Elementos
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

// Posição dos Elementos na Tela
const product1 = products[0];
console.log(product1.getBoundingClientRect());

// Alterando Estilos com JS
mainContainer.style.color = "white";
mainContainer.style.backgroundColor = "#000";
mainContainer.style.padding = "30px";

// Estilizando Vários Itens
for(const li of listItens){
    li.style.backgroundColor = "#345267"
}