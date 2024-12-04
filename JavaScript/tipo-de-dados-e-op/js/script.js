// Tipo Number
console.log("O tipo Number:");
console.log(2);
console.log(typeof 2);
console.log(typeof 23.4);
console.log(typeof -1029);

// Operações Aritméticas
console.log("Operações Artiméticas:");
console.log(2*9);
console.log(15/3);
console.log(45-32);
console.log(16+90);
console.log(5 + 6 * 4 / 2);

// Special Numbers
console.log("Special Numbers:");
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "a");
console.log(typeof NaN);

// Strings
console.log("O tipo String:");
console.log("Leonardo");
console.log('Zani');
console.log(`de Souza`);

console.log(typeof "Leonardo");
console.log(typeof 'Zani');
console.log(typeof `de Souza`);

// Caracteres Especiais
console.log("Caracteres Especiais:");
console.log("Texto em\nduas linhas");
console.log("Espaçamento tipo\tTab");

// Concatenação
console.log("Concatenação:");
console.log("Esse texto foi" + " Concatenado");

// Interpolação OU Template Strings
console.log("Interpolação:");
console.log(`A soma de 2+2 é: ${2 + 2}`)
console.log(`Podemos executar qualquer coisa, desde que entre crases, com interpolação: ${console.log("teste")}`)

//  Booleans
console.log("O tipo Booleano:");
console.log("Para boolean temos dois valores: True ou False")
console.log(2==3)
console.log(2==2)
console.log(typeof true)

// Comparações
console.log("Fazendo comparações:");
console.log(5 <= 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(5 != 6);

// Valor idêntico
console.log("Esses operadores levam em consideração o tipo de dados:")
console.log(5 == 5);
console.log(5 === "5");
console.log(5 != 5);
console.log(5 !== "5");

// Operadores Lógicos na Prática
console.log("Operadores Lógicos:");
console.log(true && true)
console.log(true && false)
console.log((1 == 1) && ( 1 === "1"));
console.log((1 == 1) || ( 1 === "1"));
console.log(!(1 == 1));

// Empty Values
console.log("Empty Values:");
console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == false);
console.log(undefined == false);

// Mudança de tipos
console.log("Conversão Automática de Tipos:");
console.log(5 * null);

console.log("teste" * "opa");
console.log(`"10" + 1 = ${"10" + 1}`);
console.log(`"10" - 1 = ${"10" - 1}`);