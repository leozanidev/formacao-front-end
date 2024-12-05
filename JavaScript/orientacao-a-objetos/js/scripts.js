// Métodos
console.log("Métodos: toda função dentro de um objeto");
const animal = {
    nome: "Sky",
    latir: function () {
        console.log("Au Au Au Au Au!!!!!!!!")
    }
};
console.log(animal.nome);
animal.latir();

// Aprofundando em Métodos
console.log("Aprofundando em Métodos:");
const pessoa = {
    nome: "Leonardo",
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
};
console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Carlos");
console.log(pessoa.getNome());

// Sobre os Prototypes
console.log("Prototypes na prática:");
const text = "caracoles";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const array = [];
console.log(Object.getPrototypeOf(array));

// Mais sobre Prototypes
const myObject = {
    a: "b",
}
console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// Classes Básicas
console.log("Sobre Classes Básicas:");
const cachorro = {
    raca: null,
    patas: 4,
};
const pastorBelga = Object.create(cachorro);
pastorBelga.raca = "Pastor Belga";
console.log(pastorBelga);
console.log(pastorBelga.patas);

const pitMonster = Object.create(cachorro);
pitMonster.raca = "Pit Monster";
console.log(pitMonster);

// Funções como Classes - Funções Construtoras
console.log("Classes baseadas em Funções Construtoras:");
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}

const sky = criarCachorro("Sky", "SRD");
console.log(sky);
const loki = criarCachorro("Loki", "SRD");
console.log(loki);

console.log(Object.getPrototypeOf(loki));

// Mais sobre Funções
console.log("Classes baseadas em Funções:");
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
};
const leona = new Cachorro("Leona", "Labrador");
console.log(leona);

// Métodos de Funções Construtoras
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuuuuuuuuu!!!");
};
leona.uivar();

// Classes ES6 ( Classes em JS )
class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}
const miau = new CachorroClasse("Miau", "Rottweiller")
console.log(miau);
console.log(Object.getPrototypeOf(miau));

// Mais sobre Classes
console.log("Mais sobre Classes:");
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}
const scania = new Caminhao(8, "Preta");
console.log(scania);
scania.descreverCaminhao();

Caminhao.motor = 4; /* Isso não funciona */

const c2 = new Caminhao(4, "Branca");
console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0; /* Assim funciona */
const c3 = new Caminhao(2, "Púrpura");
console.log(c3.motor);

// Override nas Propriedades via Prototype
console.log("Override nas Propriedades via Prototype:");

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};

const leonardo = new Humano("Leonardo", 20);
console.log(leonardo);

Humano.prototype.idade = "Não definida.";
console.log(leonardo.idade);
console.log(Humano.prototype.idade);

// Symbol com Classes
console.log("Symbol com Classes:");
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbina = turbinas;
    }
};

const asas = Symbol();
const pilotos = Symbol();
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10)
console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// Getter e Setter
console.log("Getters e Setters:");
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo o post: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Postagem Genérica", "Apenas uma postagem genérica");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JavaScript, ES6, JS"
console.log(myPost);
console.log(myPost.tags);

// Herança
console.log("Herança:");
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark);
console.log(shark.patas);

// Operador InstanceOf
console.log("Operador InstanceOf:");
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "Testando") instanceof Mamifero);
console.log(new Post("X", "Y") instanceof Cachorro);
