/*
Exercicio 1 - Crie uma função chamada somarTudo que recebe quantos números quiser e retorna a soma de todos eles.
*/
function somarTudo(...numeros) {
    const somar = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return somar;
}

console.log(somarTudo(10, 20));
console.log(somarTudo(1, 9, 7, 31, 12));

/*
Exercicio 2 - Clonando e estendendo objetos com Spread:
Crie um novo objeto chamado usuarioAtualizado que:
* Copia todas as propriedades do objeto usuario
* Adiciona a propriedade email: "joao@email.com"
*/

const usuario = {
    nome: "João",
    idade: 30
}

const usuarioAtualizado = {
    ...usuario,
    email: "joao@email.com"
}

console.log(usuarioAtualizado);

//Exercício 3 – Mesclando arrays com Spread
const frutas = ["maçã", "laranja"];
const legumes = ["cenoura", "batata"];

const frutasLegumes = [...frutas, ...legumes];

console.log(frutasLegumes);

//  Exercício 4 – Desestruturação com Rest
const numeros = [10, 20, 30, 40, 50];
const [primeiro, ...restantes] = numeros
console.log(primeiro);
console.log(restantes);

// Exercício 5 – Função que desestrutura e usa Rest
const maria = {
    nome: "Maria",
    idade: 28,
    cidade: "Recife",
    profissao: "Designer"
}

function exibirInfoPessoa(pessoa) {
    const { nome: nomePessoa, idade: idadePessoa, ...outrasInformacoes } = pessoa;
    console.log(`Nome: ${nomePessoa}`)
    console.log(`Idade: ${idadePessoa}`)
    console.log("Outras informações:", outrasInformacoes)

}

exibirInfoPessoa(maria);
exibirInfoPessoa(joao);