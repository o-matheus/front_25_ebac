// Criação de um dicionário
let meuMap = new Map();

// Adicionando chaves
meuMap.set("nome", "Matheus");
meuMap.set("idade", 27)

console.log(meuMap);

// Buscando valores
const nome = meuMap.get("nome");
console.log(nome);

// Acompanhando tamanho
console.log(meuMap.size);

// Confere a existência de uma chave e retorna um valor boleano.
console.log(meuMap.has("nome"))

// Apaga chaves e valores do dicionário
// meuMap.clear()

// As iterações com dicionários vão seguir a estrutura (variavel of nomeDicionário.função) {O que vai ser executado}
// Fazendo iterações com o dicionário, essa em especifico é para ver as chaves 
// Também é possível usar o forEach para fazer uma ação em cada um dos elementos do dicionário 
for (let chave of meuMap.keys()) {
    console.log(chave);
}

// para ver os valores usar o "values"
for (let valor of meuMap.values()) {
    console.log(valor);
}

// Para pegar a entrada toda (chave e valor) usamos "entries"
for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

// Podemos também trabalhar essas informações como arrays e fazer uma formatação dos resultados.
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// Deletar uma chave especifica do dicionário 
meuMap.delete("idade")

// Criação de sets  - Possui chaves e valores, mas as chaves são também os valores
const cpfs = new Set();

// Adicionar info - CPF's adicionados como string para não dar erro por causa do zero a esquerda
cpfs.add('00698656040')
cpfs.add('87048924020')
cpfs.add('52533039012')
cpfs.add('62759878040')

console.log(cpfs);

// Usando o set para evitar a repetição de de valores.
const array = ['Matheus', 'Lucas', 'Fernando', 'Weliz', 'Betin', 'Matheus', 'Lucas']

// Quando colocamos algo dentro do Set siginfica os parametros iniciais dele. Para pegar os itens do array usamos o spread e a função responsável por não repitir é o Set.
const arrayComSet = new Set ([...array])

console.log(arrayComSet);

// Transformando de set para array
const setParaArray = [...arrayComSet];
console.log(setParaArray);



