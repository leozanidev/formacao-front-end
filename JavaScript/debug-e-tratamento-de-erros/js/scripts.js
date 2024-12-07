// Strict Mode
console.log("Usando o Strict Mode:");
"use strict";
// opa = "Teste";
const opa = "Teste";
// const undefined = 10;
// delete [].length;

// Debugando com console.log
console.log("Debugando com console.log:");
let a = 1;
let b = 2;

if(a == 1) {
    a = b + 2;
}
console.log(a);

for(let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if(a > 5) {
    a = 25;
}
console.log(a); /* Verificando valores em diversos pontos do código */

// Debugger
// console.log("Debugando com a instrução Debugger:");
// let c = 1;
// let d = 2;

// if(c == 1) {
//     c = d + 2;
// }
// debugger;

// for(let i = 0; i < d; i++) {
//     c = c + 2;
// }

// console.log("Executou o loop!");
// debugger;

// if(c > 5) {
//     c = 25;
// }

// Tratamento de dado por função
console.log("Tratamento de dados recebidos do usuário:");
function checkNumber(n) {
    const result = Number(n);

    if(Number.isNaN(result)) {
        console.log("Valor inválido!");
        return;
    }
    console.log("Valor válido!");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("Nada"); /* Sanitização de dados */

// Exception
// console.log("Exceptions:");
let x = 10;

// if(x != 11) {
//     throw new Error("Valor de X não pode ser diferente de 11!")
// }

// Try Catch
console.log("Usando Try Catch:");
try {
    const soma = x + y;
} catch(error) {
    console.log(`Erro no programa:${error}`);
}

// Utilizando Finally
console.log("Utilizando o FInally:");
try {
    const value = checkNumber("abc");
    if(!value) {
        throw new Error("Valores inválidos!");
    }
} catch(error) {
    console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
    console.log("O código foi executado!");
};

// Assertions
console.log("Assertions:"); /* Algo para os devs */
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error ("O array precisa ter elementos!");
    } else{
        console.log(`O array tem ${arr.length} elementos`);
    }
}

// checkArray([]);
checkArray([1, 2, 3, 4, 5]);