/* Eventos são ações atreladas aos comportamentos do usuário.
Exemplo: click, tecla, movimento de tela ou mouse, etc....
Podemos inserir uma lógica para quando há esses eventos.
Podemos disparar eventos em certos elementos.
Event Handler é a função anônima que vai dentro do evento para que algo seja feito. */

// Acionando Eventos
const btn = document.querySelector("#my-button");
btn.addEventListener("click", function(){
    console.log("Clicou aqui!");
});

// Removendo Eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Mensagem!")
};

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido!");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// Objeto do Evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// Propagando Eventos
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1!");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2!");
});

// Removendo Evento Padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não redirecionou!");
});

// Eventos de Tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

// Outros Eventos do Mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão do mouse!")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão do mouse!")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Pressionou o botão do mouse duas vezes!")
})

// Movimentos do Mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`)
//     console.log(`No eixo Y: ${e.y}`)
// })

// Eventos por Scroll
window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200) {
        console.log("Passamos de 200px")
    }
})

// Evento de Foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no Input!");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do Input!");
});

// Eventos de Carregamento de Páginas
/* Evitar o uso do beforeunload */
window.addEventListener("load", () => {
    console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
});

// Debounce - cadenciar eventos; melhora de perfomance
const debounce = (f, delay) => {
    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener(
    "mousemove",
    debounce(() => {
    console.log("Executando evento a cada 400ms!");
    }, 400)
);
