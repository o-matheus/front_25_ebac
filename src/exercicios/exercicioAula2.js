// Função construtora
const Pessoas = function(nome, idade, curso){
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
}

// Array com estudantes
const estudantes = [];

// Criação de objetos 
const maria = new Pessoas("Maria", 23, "Pscicologia");
const matheus = new Pessoas("Matheus", 26, "Frontend");
const joao = new Pessoas("João", 22, "Backend");
const lucas = new Pessoas("Lucas", 16, "Designer");
const hercules = new Pessoas("Hercules", 3245, "Herói");

// Adicionando objetos no array
estudantes.push(maria, matheus, joao, lucas, hercules);

// Fazendo função forEach() 
estudantes.forEach(function(item){
    console.log(`${item.nome}, está no curso de ${item.curso} e tem ${item.idade} anos`)
})

// Fazendo função map
const nomeEstudantes = estudantes.map(function(item){
    item = {
        nome: item.nome,
    }
    return item;
})

// console.log(nomeEstudantes);

// Fazendo função filter
const mais18 = estudantes.filter(function(item){
    return item.idade > 18;
})

// console.log(mais18);

// Fazendo a função some
const alguemBackend = estudantes.some(function(item){
    return item.curso === "Backend"
}) 

// console.log(alguemBackend)

// Fazendo função every
const todosMais18 = estudantes.every(function(item){
    return item.idade > 18
})

// console.log(todosMais18);

const somaIdade = estudantes.reduce(function(acumulo, item){
    acumulo += item.idade;
    return acumulo
}, 0)

// console.log(`A soma de todas as idades é ${somaIdade} anos`);

