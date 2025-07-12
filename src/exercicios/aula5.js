/*
Questão extra - criando um algoritimo que gere cpfs. 
CPF - 11 números
n1-n2-n3-n4-n5-n6-n7-n8-n9-n10-n11
* Os 8 primeiros números dele são aleatórios. 
* O 9º é referente ao a região da pessoa.
-- Regra número 10 --
* O 10º número é = (10 x n1 + 9 x n2 + 8 x n3 + 7 x n4 + 6 x n5 + 5 x n6 + 4 x n7 + 3 x n8 + 2 x n9) / 11 
    * Se o resto dessa divisão for 0 ou 1 o 10º digito vai ser 0
    * Se for outro falor vai ser 11 - resto da divisão.
-- Regra número 11 --
* O 11º número é (10 x n10 + 9 x n9 + 8 x n8 + 7 x n7 + 6 x n6 + 5 x n5 + 4 x n4 + 3 x n3 + 2 x n2)
*/

/*
1 - Criar 11 varíaveis
2 - Fazer uma função para gerar números aleatórios e definir os valores das variáveis 1 a 9 
3 - Fazer uma função que siga a regra número 10
4 - Fazer uma função que siga a regra número 11
*/


const criarCPF = function () {
    // Criando números usando Math.floor
    function gerarNumero() {
        return Math.floor((Math.random() * 10));
    }
    console.log(gerarNumero());

    // Outra forma de fazer a geração do número é usando o parseInt, que corta os números depois do ponto. 
    function gerarNumb() {
        return parseInt((Math.random() * 10));
    }
    console.log(gerarNumb());


    const sorteioNumeros = Array.from({ length: 9 }, () => gerarNumero());
    const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = sorteioNumeros;

    function sorteioN10() {
        let n10 = 0
        let l = ((n1 * 10 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2) % 11)
        if (l == 0 || l == 1) {
            n10 = 0;
        }
        else {
            n10 = 11 - l;
        }
        return n10;
    }

    sorteioNumeros.push(sorteioN10());
    const n10 = sorteioNumeros[9]

    function sorteioN11() {
        let n11 = ((n2 * 10 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + n10 * 2) % 11)
        if (n11 == 0 || n11 == 1) {
            n11 = 0
        }
        else {
            n11 = 11 - n11
        }
        return n11
    }

    sorteioNumeros.push(sorteioN11());
    console.log(sorteioNumeros.join(""))
}

/*
✅ Exercício 1 – Criando um Map de Produtos
Crie um Map chamado produtos que armazene o nome de produtos como chave e o preço como valor. Depois, adicione pelo menos 3 produtos ao Map.
*/

const produtos = new Map();
produtos.set("Computador", 1500);
produtos.set("Monitor", 450);
produtos.set("Teclado", 60);


/*
✅ Exercício 2 – Iterando sobre um Map
A partir do Map de produtos criado no exercício anterior, exiba no console cada produto com seu respectivo preço, no formato:
Produto: Café, Preço: R$ 12.99
*/

for (let [chave, valor] of produtos.entries()) {
    console.log(`Produto: ${chave}, Preço: R$ ${valor}`)
}

// Tenho que estudar mais a estrutura dos laços de repetição com esses dicionários

/*
✅ Exercício 3 – Criando um Set de Números Únicos
Dado um array com números repetidos, crie um Set para remover as duplicatas e exiba o novo conjunto.
Array base:
[5, 7, 5, 3, 7, 8, 9, 3]
*/
// Array com os números repetidos 
const repeatNumbs = [5, 7, 5, 3, 7, 8, 9, 3];

// Usando o set para retirar os números repetidos
const numbs = new Set(repeatNumbs);

// Transformando de set para array
const numerosUnicos = [...numbs];

// Aqui eu consegui fazer o exercicio com o que lembrava, mas tinha esquecido de transformar o set para array no final.

/*
✅ Exercício 4 – Verificação com Set
Crie um Set com nomes de cidades. Depois, peça para o usuário digitar um nome e verifique se essa cidade está no conjunto.
*/

const cidades = new Set();

cidades.add("Fortaleza");
cidades.add("Recife");
cidades.add("Tocantis");
cidades.add("Belem");

// Fazer importação do Readline.
import * as readline from 'node:readline/promises';

/*
Aqui ele está fazendo uma desestruturação do readline, do stdin - Que é o metódo padrão da entrada - Teclado e o stdout - Metódo padrão de saída - console. 
*/
import { stdin as input, stdout as output } from 'node:process';


const rl = readline.createInterface({ input, output });

const answer = await rl.question('Digite o nome da cidade, vamos conferir se a mesma já está no banco de dados. ');
if (cidades.has(answer) == true) {
    console.log(`A cidade ${answer}, está no nosso sistema!`)
}
else {
    console.log(`A cidade ${answer}, não está no nosso sistema.`)
}


rl.close();

/* 
1º Passo criar o set com o nome de algumas cidades. 
2º Procurar como fazer o input por meio do console (Vamos usar o readline.)
3º Fazer alterações no código para gerar uma cadeia de condições e verificar se a cidade digitada está no set.
    3.1º - Fazer a conferência com o has. 
    3.2º - Criar condicionais para cada uma das situações
*/

/*
✅ Exercício 5 – Conversão entre Array, Set e Map
A partir de um array de nomes, transforme:

O array em um Set;

O Set em um Map onde a chave será o índice do nome no array original e o valor será o nome.
*/

const nomes = ["Matheus", "Barra", "Igor", "Liz"]

const setNomes = new Set(nomes);
// Aqui a solução que o n propos
const mapNomes = new Map([...setNomes].map((c, i) => [i, c]));

console.log(mapNomes)





