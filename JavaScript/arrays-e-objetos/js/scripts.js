// Conhecendo os Arrays
console.log("Conhecendo os  Arrays:");
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = [ 1, 2, 2.91, "Três", true, []];
console.log(itens);
console.log(typeof itens);

// Mais sobre Arrays
console.log("Mais sobre Arrays:");
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[90]);

// Propriedades
console.log("Propriedades:");
const numbers = [2, 4, 6, 8, 10];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Leonardo Zani de Souza";
console.log(myName.length);

// Métodos
console.log("Métodos:");
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// Objetos (Object Literals)
console.log("Objetos:");
const person = {
    name: "Leonardo",
    age: 20,
    job:"Developer",
}
console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// Criando e Deletando Propriedades
console.log("Criando ou excluindo propriedades:");

const car = {
    engine: 2.0,
    brand: "VW",
    model:"Golf",
    km: 120000,
};
console.log(car);

car.doors = 2;
console.log(car);

delete car.brand;
console.log(car);

// Diferença entre Arrays e Objetos:
console.log("Diferença entre Arrays e Objetos:\nObjetos --> descrevem um item\nArray  --> são listas de itens");

// Mais sobre Objetos
console.log("Mais sobre Objetos:");
const obj = {
    a: "Teste",
    b: true
}
console.log(obj instanceof Object);

const obj2 = {
    c: [],
}

Object.assign(obj2, obj);
console.log(obj2);
console.log(obj);

// Conhecendo melhor Objetos
console.log("Conhecendo melhor os Objetos:");
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// Mutação ou Mutability
console.log("Mutação ou Mutability:");

const a = {
    name: "Leonardo"
};
const b = a;
console.log(a);
console.log(b);
console.log(a === b);

a.age = 20;
console.log(a);
console.log(b);

delete b.age;
console.log(a);
console.log(b);

// Loop em Arrays
console.log("Loop em Arrays:");

const users = ["Leonardo", "Leo", "Leozinho", "Léo", "Zani"];

for(let i = 0; i < users.length; i++) {
    console.log(`Listando os usuário: ${users[i]}`);
}

// Push e Pop
console.log("Push e Pop: alterações ao fim da lista");
const array = ["a", "b", "c"];
console.log(array.length);

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

array.push("e", "f", "g", "h", "i");
console.log(array);

// Shift e UnShift
console.log("Shift e UnShift: alterações no ínicio da lista");
const letters = ["a", "b", "c", "d", "e"];

const letter = letters.shift();
console.log(letter);
console.log(letters);

letters.unshift("v","w", "x", "y", "z");
letters.unshift("u");
console.log(letters);

// IndexOf e LastIndexOf
console.log("IndexOf e LastIndexOf:");
const fruits = ["morango", "abacate", "maçã", "pêra", "maçã", "uva"];

console.log(fruits.indexOf("morango"));
console.log(fruits.indexOf("maçã"));

console.log(fruits.lastIndexOf("maçã"));

console.log(fruits.indexOf("Laranja"));
console.log(fruits.lastIndexOf("Laranja"));

// Slice
console.log("Slice:");
const testeSlice = [1, 2, 3, 4, 5, 6];

const subArray = testeSlice.slice(2,4);
console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(23, 26);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// ForEach
console.log("ForEach:");
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro Post", category: "PHP"},
    {title: "Segundo Post", category: "JavaScript"},
    {title: "Terceiro Post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// Includes
console.log("Inlcudes:");
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Mercedez"));

if (brands.includes("BMW")) {
    console.log("Há carro da marca BMW!");
};

// Reverse
console.log("Reverse:");
const reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse();
console.log(reverseTest); 

// Métodos em STRINGS
// Trim
console.log("Trim:");
const trimTest = "      testando\n      ";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// PadStart e PadEnd
console.log("PadStart e PadEnd:");
const testPadStart = "1";

const newNumber = testPadStart.padStart(4, "0");
console.log(testPadStart);
console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");
console.log(testPadEnd);

// Split
console.log("Split:");
const frase = "O rato roeu a roupa do rei de Roma";

const arrayFrase = frase.split(" ");
console.log(arrayFrase);

// Join
console.log("Join:")
const novaFrase = arrayFrase.join(" ");
console.log(novaFrase);

const itensParaComprar = ["Monitor", "Teclado", "Mouse"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
console.log(fraseDeCompra);

// Repeat
const palavra = "Teste! ";
console.log(palavra.repeat(5));

// Rest Operator "..." ( De volta para Arrays )
const somaInfinita =  (...args) => {
    let total = 0;
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 123, 4235));

// Estrutura For Of
console.log("Estrutura de Repetição FOR OF:");
const somaInfinita2 = (...args) => {
    let total = 0;
    for (num of args) {
        total += num;
    }
    return total;
};

console.log(somaInfinita2(2, 4, 6));
console.log(somaInfinita2(32, 54, 67, 23, 90, 110));

// Ínicio de Destructuring em Objetos
console.log("Destructuring em Objetos:");
const userDetails = {
    firstName: "Leonardo",
    lastName: "Zani de Souza",
    job: "Developer",
}

const {firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job);

// Renomeando Variáveis com Destructuring
const {firstName: primeiroNome} = userDetails;
console.log(primeiroNome);

// Fim de Destructuring em Objetos

// Destructuring em Arrays
console.log("Destructuring em Arrays:");
const myList = [ "Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC);

// Conhecendo o JSON
console.log("Conhecendo JSON(JavaScript Object Notation):");
const myJson = '{"name": "Leonardo", "age": 20, "skills": ["PHP", "JavaScript", "Python"]}';
console.log(myJson);
console.log(typeof myJson);

// Convertendo JSON
console.log("Convertemos de JSON para objeto quando recebemos e de Objeto para JSON quando enviamos:");
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);
myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);