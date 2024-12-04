// Variáveis
// let nome = "Léo";
// console.log(nome);

// nome = "Leonardo Zani de Souza";
// console.log(nome);

// const idade = 20;
// console.log(idade);

// console.log(typeof nome)
// console.log(typeof idade)

// // Mais sobre Variáveis
// let a = 1, b = 5, c = 10;
// console.log(a, b, c);

// const nomecompleto = "Leonardo";
// const nomeCompleto = "Leonardo Zani de Souza";
// console.log(nomecompleto);
// console.log(nomeCompleto);

// Palavras Reservadas 

// O ambiente Javascript: Navegador

// A estrutura de uma função

// A função prompt: recebe um dado do usuário
// const age = prompt("Digite a sua idade:");
// console.log(`Você tem ${age} anos.`);

// Função Alert
// alert("Teste!");
// const x = 23;
// alert(`O número é ${x}`);

// Objeto Math
// console.log(Math.max(100, 12, 40, 51, 1000));
// console.log(Math.floor(5.69));
// console.log(Math.ceil(6.45));

// Objeto console
// console.log("Teste!");
// console.error("Erro!");
// console.warn("Aviso!");

// Estruturas de Controle: alteram o fluxo de execução

// // IF
// const m = 10;
// if (m > 5){

//     console.log("M é maior que 5.");

// };

// const user = "João";
// if (user === "João"){
//     console.log("Parabéns, seu nome é João!");
// };

// ELSE
// const loggedIn = false;

// if (loggedIn) {
//     console.log("O usuário está logado!");
// } else {
//     console.log("O usuário não está logado!");
// };

// const q = 10;
// const  w = 34;

// if( q >  90 && w > 20) {
//     console.log("Os números não são grandes.");
// } else {
//     console.log("Os números são altos.");
// };

// ELSE IF
// if ( 1 > 2 ) {
//     console.log("Teste!");
// } else if ( 2 > 3 ) {
//     console.log("Teste 2!");
// } else if ( 5 > 1  ) {
//     console.log("Teste 3!");
// }

// const userName = "Léo";
// const userAge = 20;

// if (userName === "Matheus")  {
//     console.log("Bem vindo, MAtheus!");
// } else if (userName === "Léo" && userAge === 20) {
//     console.log("Bem vindo, Léo!");
// }

// Estruturas de Repetição

// WHILE
// let p =  0;

// while ( p < 5 ) {
//     console.log(`Repetindo ${p}`);
//     p = p + 1;
// }

// DO WHILE
// let o = 10;

// do {
//     console.log(`O valor de o: ${o}`);
//     o--;
// } while ( o > 1);

// FOR
// for ( let t = 0; t < 10; t++){
//     console.log("Repetindo....");
// }

let r = 10;
for(r; r > 0; r = r - 1 ){
    console.log(`Este é o valor de r: ${r}`);
}

// Identação: utilizamos tab para alinhar o código e melhorar sua legibilidade

// Forçando saídade de um loop: usamos break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é ${g}`);
    if (g === 12) {
        console.log("O valor de g é 12!");
        break;
    }
}

// Pulando uma execução de loop
for(let s = 0; s  < 10; s = s + 1) {
    if(s % 2 === 0) {
        console.log("O número é par!");
        continue;
    }
    console.log(s);
}

// SWITCH: para quando tiver muito if else
const job = "Enfermeiro";

switch(job) {
    case "Programador":
        console.log("Você é programador!")
        break
    case "Advogado":
        console.log("Você é um advogado!")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!")
        break
    case "Médico":
        console.log("Você é um médico!")
        break
    default:
        console.log("Profissão não identificada!")
}

/* Convenção de Nome para Variáveis
    let programadorcadastrado; ( RUIM )
    let programador_cadastrado;
    let ProgramadorCadastrado;
    let programadorCadastrado; ( MAIS UTILIZADO )
*/