// JS ES6+: São as novas versões do JS;
// LET: Atribuimos valor que podem ser alterados depois;
// CONST: Atribuímos valores que não podm ser alterados depois;
// Os dois "substituem" a antigo var;
// var x = 10;
// var y = 15;
// if(y > 10) {
//     var x = 5;
//     console.log(x);
// }
// console.log(x); //Perde-se o valor de referência que tinha primeiramente

// let a = 10;
// let b = 15;

// if(b > 10) {
//     let a = 5;
//     console.log(a);
// }
// console.log(a); //Manteve-se o valor do escopo globo, apesar da alteração no escopo local(Escopo de bloco/Entre chaves)

// function logName() {
//     const name = "Pedro";
//     console.log(name);
// }
// const name = "Leonardo";
// logName();
// console.log(name);

// Arrow Functions: criam funções de forma simplificada;
// const sum = function(a, b) {
//     return a + b;
// }
// const arrowSum = (a, b) => a + b; // Não precisamos do corpo da função, nem do return;
// console.log(sum(1, 4));
// console.log(arrowSum(1, 4));

// const greeting = (name) => {
//     if(name){
//         return `Hello, ${name}`;
//     } else {
//         return "Hello";
//     }
// }; //Também podemos contruir com corpo caso ela tenha um escopo maior;
// console.log(greeting("Leonardo"));
// console.log(greeting());

// const user = {
//     name: "Léo",
    
//     sayUserName() {
//         setTimeout(function() {
//             console.log(this);
//             console.log(`Username:${this.name}`);
//         }, 1000)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 1000);
//     }, //Nos proporciona o escopo atual para o this;
// };

// user.sayUserName();
// user.sayUserNameArrow();

// Filter: método de array onde determinamos um filtro, através de uma função, que resultará em um array;
// const arr = [1, 2, 3, 4, 5, 6];

// const highNumbers = arr.filter((n) => {
//     if(n >= 3) {
//         return n;
//     }
// });
// console.log(highNumbers);

// const users = [
//     {name: "Leonardo", available: true},
//     {name: "José", available: false},
//     {name: "Carla", available: true},
//     {name: "Luiz", available: true},
//     {name: "Maria", available: false},
// ];
// const availableUsers = users.filter((user) => user.available);
// console.log(availableUsers);

// Map: método de array, utilizado pra que possamos alterar os elementos selecionados;
// const products = [
//     {name:"Camisa", price: 10.99, category: "Roupas"},
//     {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
//     {name: "Fogão", price: 500, category: "Eletro"},
//     {name: "Calça Jeans", price: 87.99, category: "Roupas"},
// ];
// products.map((products) => {
//     if(products.category === "Roupas") {
//         products.onSale = true;
//     }
// })

// console.log(products);

// Template Literals: usamos uma string, entre crases, para que possamos inserir variáveis nela (entre ${});
// const userName = "Léo";
// const userAge = 20;

// console.log(`O nome do usuário é ${userName} e sua idade é ${userAge} anos`);

// Destructuring: Usamos para desestruturar dados complexos ( como objetos e arrays ) em varias variáveis;
// const fruits = ["Maçã", "Mamão", "Laranja"];

// const [f1, f2, f3] = fruits;

// console.log(f1, f2, f3);

// const productDetails = {
//     name: "Mouse",
//     price: 650,
//     category: "Periférico",
//     color: "Cinza",
// };

// const { name: nome, price, category, color } = productDetails;
// console.log(nome, price, category, color);

// Spread Operator: Utilizamos para inserir novos valores em arrays ou objetos, ou, até mesmo, unir dois arrays;
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];

// const a3 = [...a1, ...a2];

// console.log(a3);

// const a4 = [0, ...a3, 7];
// console.log(a4);

// const carName = {name: "Gol"};
// const carBrand = {brand: "VW"};
// const otherInfos = {km: 100000, price: 49900};

// const car = { ...carName, ...carBrand, ...otherInfos};
// console.log(car);

// Classes: Recursos fundamentais para poder programar orientado a objetos
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDicount(discount) {
        return this.price * ((100 - discount) / 100);
    }
};

const shirt = new Product("Camisa Over-Sized", 20);
console.log(shirt);

console.log(shirt.productWithDicount(10));
console.log(shirt.productWithDicount(50));

// Herança: Possibilidade de uma classe herdar métodos e propriedades de outras;
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
};

const hat = new ProductWithAttributes("Chapéu", 30, ["Azul", "Branco", "Preto"]);

console.log(hat);
console.log(hat.name);
hat.showColors();