// Definindo uma função
function minhaFuncao() {
    console.log("Testando!");
}

minhaFuncao();

const minhaFuncaEmVariavel = function (){
    console.log("Esta função está numa variável.");
}

minhaFuncaEmVariavel();

function funcaoComParametros(txt) {
    console.log(`IMprimindo: ${txt}`);
}

funcaoComParametros("Imprimindo alguma coisa");

// Retornando valores
const a = 23;
const b = 13;
const c = 63;
const d = 83;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, d);
console.log(resultado);
console.log(soma(b, c));

// Escopo das funções
let y = 20;

function testandoEscopo() {
    let y = 10;
    console.log(`O y dentro da função vale:  ${y}`);
}

testandoEscopo();
console.log(`O y fora da função vale: ${y}`);
testandoEscopo();

// Escopo aninhado
let m = 10;

function escopoAninhado() {
    let  m = 20;
    if(true)  {
        let m = 30;
        if(true) {
            let m = 40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();

console.log(m);

// Arrow Function
const testeArrow = () => {
    console.log("Esta é uma arrow function!");
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0)  {
        console.log("O número é par!");
        return; // Early return para poupar espaço na memória.
    }
    else {
        console.log("O número é ímpar!");
    }
}

parOuImpar(10);
parOuImpar(25);

// Mais sobre Arrow Functions
const raizQuadrada = (x) => {
    return x * x;
};
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));
console.log(raizQuadrada2(15));

const helloWorld = () => console.log("Hello World!");
helloWorld();

// Parâmetro Opcional
const multiplication = function(m, n) {
    if(n ===  undefined) {
        return m * 2;
    } else { 
        return m * n;
    }
}

console.log(multiplication(10));
console.log(multiplication(10, 9));

const  greeting = (name) => {
    if(!name) {
        console.log("Olá!");
        return;
    }

    console.log(`Olá, ${name}`);
}

greeting("Jorge");
greeting();

// Argumento Default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
}

console.log(customGreeting("Léo"));
console.log(customGreeting("Léo", "Boa noite"));

const repeatText  = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text);
    }
}
repeatText("Oi");
repeatText("Oi", 5);

// Closure
function someFunction() {
    let txt = "Alguma coisa!";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();

// Mais sobre Closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};
const c1 = multiplicationClosure(2);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(2));
console.log(c2(10));

// Recursão
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!");
    } else {
        console.log(n);
        const x = n - m;
        untilTen(x, m);
    }
};

untilTen(200, 10);

function factorial(x) {
    if(x===0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
};

const num = 6;
const result = factorial(num);
console.log(`O fatorial de ${num} é ${result}`);
