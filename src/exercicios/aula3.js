const saudacao = nome => (`Olá ${nome}!`)
const dobro = x => x * 2

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 31 },
    { nome: "Carlos", idade: 17 },
    { nome: "Diana", idade: 19 }
];

const pessoasMais18 = pessoas.filter(item => item.idade >= 18) 

// console.log(pessoasMais18);

const menssagemPessoas = pessoas.map(item => `Olá ${item.nome}! Você tem ${item.idade} anos `)
console.log(menssagemPessoas)

