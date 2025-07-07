# Módulo 25 - ES6

## Menu
[Aula 1 - Conheça Babel](#aula-1--conheça-babel)  
[Aula 2 - Compreenda os metodos de arrays ](#aula-2---compreenda-os-métodos-de-arrays)  
[Aula 3 - Conheça arrow functions ](#aula-3--conheça-arrow-functions)  
[Aula 4 - Compreenda os operadores de spread e rest ](#aula-)  
[Aula 5 - ](#aula-)  
[Aula 6 - ](#aula-)  
[Aula 7 - ](#aula-)  


## **Aula 1 – Conheça Babel**

### **Objetivos da aula**

* Entender o papel do Babel na transpilação de código moderno (ES6+) para versões compatíveis com navegadores antigos;
* Aprender a configurar o Babel no ambiente de desenvolvimento local;
* Explorar ferramentas que ajudam a verificar compatibilidade entre navegadores e recursos modernos do JavaScript.

---

### **Introdução ao Babel e ao ECMAScript**

A aula começa contextualizando a origem do JavaScript e seu alinhamento com a especificação **ECMAScript (ECMA)**. A ECMA não é uma linguagem de programação, mas sim um conjunto de regras e padronizações para linguagens de script — sendo o JavaScript a mais popular delas.

O JavaScript foi criado em **1996** por **Brendan Eich**, sendo inicialmente implementado no navegador **Netscape**. Desde então, ele evoluiu baseado nos padrões definidos pelo ECMAScript, como o **ES6**, também chamado de **ECMAScript 2015**, que trouxe recursos modernos como classes, arrow functions, `let`, `const`, entre outros.

---

### **O que é o Babel?**

O **Babel** é uma ferramenta que converte (ou "transpila") código JavaScript moderno para versões anteriores da linguagem, tornando-o compatível com navegadores mais antigos.

Essa transpilação é útil para garantir:

* Acessibilidade do site em navegadores legados (ex: Internet Explorer);
* Uso de recursos modernos sem comprometer a base de usuários;
* Melhor compatibilidade com ambientes de produção diversos.

O professor demonstrou a transpilação de uma classe `class Carro {}` para **11 linhas** de código mais antigo, mostrando como o Babel “traduz” estruturas modernas.

---

### **Verificação de compatibilidade**

Durante a aula, foram apresentados dois sites importantes para checar a compatibilidade de recursos:

* 🔍 [**Can I Use**](https://caniuse.com): exibe quais navegadores suportam determinados recursos de **HTML, CSS e JavaScript**.
* 🌐 [**BrowserList**](https://browserslist.dev): permite definir os navegadores-alvo e entender sua fatia de uso (ex: "> 0.25%" significa navegadores com mais de 0.25% de participação).

Essas ferramentas ajudam a definir a abrangência do suporte necessário, equilibrando inovação com a realidade de mercado.

---

### **Instalação e configuração do Babel**

Para usar o Babel localmente, o professor demonstrou dois caminhos:

#### **Inicialização tradicional do Node**

```bash
npm init
npm install --save-dev @babel/core @babel/cli
```

#### **Instalação direta (atalho)**

```bash
npm install --save-dev @babel/core @babel/cli
```

> ⚠️ Se o `npm init` não for utilizado, o Node criará automaticamente o `package.json`, mas sem a estrutura completa. Será necessário adicionar os scripts manualmente.

---

### **Configuração do script de transpilação**

No arquivo `package.json`, adicionamos o seguinte script personalizado:

```json
"scripts": {
  "build": "babel src -d dist"
},
"browserslist": "> 0.25%"
```

* `src`: pasta com arquivos `.js` modernos;
* `-d dist`: a pasta `dist` será criada automaticamente e conterá os arquivos convertidos.

---

### **Criação do arquivo de configuração**

Criamos o arquivo `babel.config.json` com a seguinte configuração simplificada:

```json
{
  "presets": ["@babel/preset-env"]
}
```

O preset `@babel/preset-env` é responsável por adaptar automaticamente os recursos do código ao ambiente de destino, com base nas regras da propriedade `browserslist` definida no `package.json`.

---

### **Gerenciamento de erros**

Durante a aula, o professor mostrou erros comuns e suas causas:

* Usar `"babel"` diretamente no script sem configurar corretamente os presets;
* Erros de digitação no `babel.config.json` ou na propriedade `browserslist`;
* Falta de arquivos `.js` na pasta `src`, impedindo o Babel de executar a transpilação.

Essas situações foram aproveitadas para demonstrar boas práticas de depuração e a importância da atenção à sintaxe.

---

### **Resumo da Aula 1**

* Entendemos o que é ECMAScript e como ele influencia o JavaScript moderno;
* Conhecemos o Babel como ferramenta de transpilação e sua importância para compatibilidade entre navegadores;
* Aprendemos a instalar o Babel via NPM, com ou sem `npm init`;
* Configuramos o `package.json` com o script `build` e a propriedade `browserslist`;
* Criamos o arquivo `babel.config.json` com o preset simplificado;
* Exploramos os sites **Can I Use** e **BrowserList** para verificar suporte dos navegadores;
* Identificamos erros comuns de configuração e como resolvê-los.


## Aula 2 - Compreenda os Métodos de Arrays

### 🎯 Objetivos da aula

* Compreender os diferentes métodos de array disponíveis no ES6+;
* Praticar a iteração e transformação de arrays usando funções como `forEach`, `map`, `find`, `filter`, `reduce`, entre outras;
* Aplicar esses métodos a exemplos práticos, entendendo suas diferenças e quando utilizá-los.

---

### 📦 Introdução aos arrays no ES6

Com a chegada do ES6, os arrays passaram a contar com diversos métodos nativos que facilitaram a leitura, manipulação e análise de dados. Esses métodos tornam o código mais legível, expressivo e eficiente — além de favorecer uma programação funcional.

Para dar início aos exemplos práticos, foi criado um array com nomes de redes sociais:

```js
const redesSociais = ['Facebook', 'Instagram', 'Twitter'];
```

---

### 🔁 `for` tradicional vs `forEach`

Antes do ES6, utilizava-se o loop `for` tradicional para percorrer arrays:

```js
for (let i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}
```

Com o ES6, o método `forEach` passou a ser utilizado como uma alternativa mais simples:

```js
redesSociais.forEach(function(rede, indice) {
  console.log(`${indice} - ${rede}`);
});
```

📌 **Diferenciais do `forEach`**:

* Mais legível;
* Aceita uma função como parâmetro;
* Permite acessar tanto o item quanto o índice;
* **Não retorna nada** — apenas executa uma ação para cada elemento.

---

### 🧭 `map()` – Transformando os dados

O `map()` é utilizado para **criar um novo array** a partir de transformações feitas nos elementos do array original.

```js
const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map(function(numero) {
  return numero * 2;
});
```

📌 **Importante**:

* O `map()` **retorna um novo array**;
* É ideal para aplicar alterações nos itens;
* Não altera o array original.

---

### 🔎 `find()` e `findIndex()`

#### 🔍 `find()`

Retorna **o primeiro item** que satisfaz uma condição:

```js
const aluno = alunos.find(function(item) {
  return item.nome === 'Power';
});
```

Se não encontrar nada, o retorno será `undefined`.

#### 🔢 `findIndex()`

Retorna o **índice do primeiro item** que satisfaz a condição:

```js
const indice = alunos.findIndex(function(item) {
  return item.nome === 'Power';
});
```

Se não houver correspondência, o retorno será `-1`.

---

### ✅ `every()` – Todos satisfazem?

Verifica se **todos os elementos** do array atendem a uma condição:

```js
const todosFront = alunos.every(function(item) {
  return item.curso === 'Front-end';
});
```

* Retorna `true` se **todos** atenderem;
* Retorna `false` se **pelo menos um** falhar.

---

### 🔍 `some()` – Algum satisfaz?

Verifica se **algum elemento** do array atende à condição:

```js
const temBack = alunos.some(function(item) {
  return item.curso === 'Back-end';
});
```

* Retorna `true` se **pelo menos um** atender;
* Retorna `false` se **nenhum** atender.

---

### 🧽 `filter()` – Selecionando múltiplos

Diferente do `find()`, o `filter()` **retorna todas as ocorrências** que atendem à condição:

```js
const backEndAlunos = alunos.filter(function(item) {
  return item.curso === 'Back-end';
});
```

📌 `filter()` sempre retorna um array (vazio, se não houver itens que satisfaçam).

---

### 🔗 Usando múltiplas condições

Tanto `some()` quanto `every()` (e outros) podem usar operadores como `&&` (E lógico) e `||` (OU lógico):

```js
const resultado = alunos.some(function(item) {
  return item.curso === 'Front-end' || item.curso === 'Back-end';
});
```

---

### 🧠 Funções nomeadas

Ao invés de escrever uma função anônima dentro de cada método, é possível criar funções nomeadas reutilizáveis:

```js
function ehFrontEnd(item) {
  return item.curso === 'Front-end';
}

const resultado = alunos.filter(ehFrontEnd);
```

Essa prática:

* Melhora a legibilidade;
* Evita repetição de lógica;
* Facilita testes e manutenção.

---

### 🧮 `reduce()` – Reduzindo tudo a um só valor

O método `reduce()` permite transformar todo um array em **um único resultado**.

```js
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, itemAtual) {
  return acumulador + itemAtual;
}, 0);
```

📌 Ele também pode ser usado para concatenar strings, criar somatórios de objetos ou gerar estruturas agregadas mais complexas.

Exemplo prático:

> Soma de valores em um carrinho de compras;
> Montar uma frase a partir de um array de palavras.

---

### 📚 Revisão geral dos métodos de array

| Método        | Função principal                                              |
| ------------- | ------------------------------------------------------------- |
| `forEach()`   | Executa algo para cada item, mas **não retorna valor**        |
| `map()`       | Cria novo array com os itens **transformados**                |
| `find()`      | Retorna **o primeiro item** que satisfaz a condição           |
| `findIndex()` | Retorna o **índice do primeiro item** que satisfaz a condição |
| `filter()`    | Retorna **todos os itens** que atendem à condição             |
| `some()`      | Retorna `true` se **algum** item atender à condição           |
| `every()`     | Retorna `true` se **todos** os itens atenderem à condição     |
| `reduce()`    | Reduz o array a **um único valor**                            |
| `push()`      | Adiciona um item ao final do array                            |

---

### ✅ Resumo da Aula 2

Nesta aula, aprofundamos o conhecimento em **manipulação de arrays** no JavaScript moderno. Exploramos métodos essenciais para leitura, transformação, filtragem e agregação de dados, compreendendo **quando usar cada um deles**. Também discutimos boas práticas, como **uso de funções nomeadas** e **escrita mais legível** para código de produção.


## Aula 3 – Conheça Arrow Functions

### 🎯 Objetivos da aula

Nesta aula, aprendemos a trabalhar com **Arrow Functions**, uma das funcionalidades introduzidas no ES6. Os objetivos principais foram:

* Compreender o conceito e a sintaxe das Arrow Functions;
* Comparar Arrow Functions com funções tradicionais em JavaScript;
* Entender o comportamento do `this` dentro das Arrow Functions;
* Saber quando é apropriado (ou não) utilizá-las no desenvolvimento.

---

### 🛠️ Criando a estrutura inicial

O professor iniciou a aula criando um novo arquivo chamado `arrays.js` dentro da pasta `src`. Esse arquivo serviria como base para a experimentação com funções tradicionais e Arrow Functions ao longo da aula.

---

### 🔁 Sintaxe das Arrow Functions

A estrutura de uma Arrow Function é mais enxuta em relação às funções tradicionais. Veja o exemplo:

```js
const minhaFuncao = () => {
  console.log("Olá, mundo!");
};
```

No exemplo acima:

* A palavra-chave `function` é omitida;
* Utiliza-se o símbolo `=>` (conhecido como “arrow”) após os parâmetros;
* O corpo da função é definido entre `{}` como de costume.

Também foi mostrado que é possível usar `return` dentro da função:

```js
const minhaFuncao = () => {
  return "Mensagem de retorno";
};
```

Neste caso, para visualizar a mensagem, é necessário usar:

```js
console.log(minhaFuncao());
```

---

### ⚡ Retorno implícito

Um recurso poderoso das Arrow Functions é o **retorno implícito**. Quando a função contém apenas uma linha de retorno, **não é necessário abrir chaves `{}` nem escrever `return`**:

```js
const saudacao = () => "Olá!";
```

Essa forma reduzida torna o código mais conciso e direto. No entanto, exige atenção para não sacrificar a legibilidade, especialmente em retornos mais complexos.

---

### 🔁 Retornando objetos com Arrow Functions

Para retornar objetos diretamente com Arrow Functions, **é necessário envolver o objeto entre parênteses**, pois `{}` sozinho será interpretado como o corpo da função:

```js
const retornaCarro = () => ({
  nome: "Ka",
  marca: "Ford"
});
```

Sem os parênteses, o JavaScript interpretaria as chaves como o corpo da função, e não como um objeto a ser retornado.

---

### ✂️ Supressão dos parênteses (quando possível)

Se a Arrow Function recebe **apenas um argumento**, os parênteses ao redor dos parâmetros podem ser omitidos:

```js
const cumprimentar = nome => `Olá, ${nome}!`;
```

Esse recurso também ajuda a deixar o código mais limpo em funções simples ou callbacks.

---

### 🔃 Reescrevendo funções tradicionais

O professor demonstrou como reescrever funções tradicionais em Arrow Functions, usando exemplos da aula anterior sobre arrays:

```js
// Função tradicional
alunos.map(function(aluno) {
  return aluno.nome;
});

// Versão com Arrow Function
alunos.map(aluno => aluno.nome);
```

Esse processo de refatoração torna o código mais moderno, principalmente em métodos como `map`, `filter`, `forEach` e `reduce`.

---

### ⚠️ Limitações das Arrow Functions com `this`

Arrow Functions **não têm seu próprio `this`**. Em vez disso, herdam o contexto do escopo onde foram definidas. Isso pode gerar comportamentos inesperados:

* No Node.js, o `this` pode retornar `undefined`;
* No navegador, o `this` pode referenciar o `window`.

💡 Por isso, **evite utilizar Arrow Functions em métodos de objetos ou situações que dependem do `this` corretamente associado**.

---

### ✅ Resumo da Aula 3

* Aprendemos a criar e utilizar **Arrow Functions** com sintaxe moderna e concisa;
* Entendemos como fazer **retornos explícitos e implícitos**;
* Descobrimos como retornar **objetos diretamente**, usando parênteses;
* Vimos que é possível **omitir os parênteses** quando há um único argumento;
* Reescrevemos funções tradicionais usando Arrow Functions;
* E, por fim, compreendemos **as limitações do `this`** nesse tipo de função, destacando os cuidados necessários ao utilizá-las.


## Aula 4 – Compreenda os Operadores de Spread e Rest

### 🎯 Objetivos da aula

* Compreender o operador **Rest**
* Dominar o uso do operador **Spread**
* Praticar a desestruturação com Rest e Spread

---

### 📦 Rest

O operador **Rest** permite que uma função receba múltiplos parâmetros de forma agrupada em um array. A sintaxe utiliza três pontos antes do nome do parâmetro:

```js
function somarComRest(...numeros) {
    // lógica
}
```

**Regras importantes:**

1. Só é permitido **um único parâmetro Rest** por função.
2. Esse parâmetro deve sempre estar na **última posição da lista de argumentos**.

O operador é muito útil para funções que recebem uma quantidade indefinida de argumentos.

---

### 🧩 Spread

Já o operador **Spread** também utiliza `...variavel`, mas é usado para **espalhar os valores de arrays ou objetos**, principalmente em situações como:

* Concatenação de arrays
* Clonagem de objetos
* Passagem de argumentos em funções
* Desestruturação

Diferente do Rest, o **Spread pode ser utilizado várias vezes** dentro do mesmo contexto, e não precisa estar no fim da lista.

Exemplo comum:

```js
const frutas = ["maçã", "banana"];
const legumes = ["cenoura", "batata"];

const feira = [...frutas, ...legumes]; // ["maçã", "banana", "cenoura", "batata"]
```

---

### 🔗 Concat

A função `concat()` serve para **mesclar arrays**, mas o operador Spread pode ser usado para atingir o mesmo objetivo com sintaxe mais moderna:

```js
const resultado = array1.concat(array2);
// equivale a:
const resultado = [...array1, ...array2];
```

---

### 🧠 Para estudar depois

* [ ] **Leetcode**
* [ ] **CodeForces**
* [ ] **Beecrowd**

Essas plataformas são excelentes para praticar algoritmos e aprofundar o domínio dos conceitos aprendidos com **Rest e Spread**.


## Tarefa extra (live) - Jogo: Adivinhe o Número

### Objetivos da tarefa

* Praticar lógica de programação com JavaScript;
* Utilizar estruturas de repetição (`while`) e condicionais (`if/else`);
* Gerar e comparar valores aleatórios com `Math.random()` e `Math.round()`;
* Lidar com entrada de dados no terminal usando o pacote `prompt-sync`;
* Exercitar a clareza no fluxo lógico e a interação com o usuário no terminal.

---

### Construção do jogo

A proposta dessa tarefa, sugerida por colegas durante uma live (especialmente **Nando**, **Igor** e **Elno**), foi criar um pequeno jogo em JavaScript no qual o computador sorteia um número entre 1 e 100, e o usuário deve tentar adivinhar esse número através do terminal.

O jogo funciona em um loop contínuo, utilizando `while (true)`, e dá dicas ao usuário dizendo se o número digitado é **maior** ou **menor** que o número sorteado. Quando o número é finalmente acertado, o jogo exibe uma mensagem de parabéns e encerra a execução com `break`.

---

### Geração do número aleatório

Para sortear um número aleatório de 1 a 100, foi utilizado:

```js
const numero = Math.round(Math.random() * 100);
```

* `Math.random()` gera um número decimal entre 0 (inclusive) e 1 (exclusivo);
* Multiplicando por 100, obtemos um número entre 0 e 100 (ainda com casas decimais);
* Com `Math.round()`, o número é arredondado para o inteiro mais próximo.

Essa combinação garantiu que o número sorteado estivesse sempre dentro do intervalo desejado.

---

### Leitura de dados com `prompt-sync`

Como o Node.js não possui um input padrão nativo no terminal, foi necessário instalar e importar o pacote [`prompt-sync`](https://www.npmjs.com/package/prompt-sync):

```bash
npm install prompt-sync
```

E depois:

```js
import PromptSync from "prompt-sync";
const input = PromptSync({ sigint: true });
```

Com isso, foi possível criar interações como:

```js
let tentativa = input("Digite um número: ");
```

O parâmetro `{ sigint: true }` garante que o programa possa ser interrompido com `Ctrl+C`.

---

### Estrutura do código

```js
import PromptSync from "prompt-sync";

console.log("Você consegue advinhar o número que estou pensando? É um número de 1 a 100");

const input = PromptSync({ sigint: true });
const numero = Math.round(Math.random() * 100);

while (true) {
    let tentativa = input("Digite um número. ");
    
    if (tentativa > numero) {
        console.clear();
        console.log("Tente novamente! O número que você escreveu é maior que o número que estou pensando.");
    } 
    else if (tentativa < numero) {
        console.clear();
        console.log("Tente novamente! O número que você escreveu é menor que o número que estou pensando.");
    } 
    else if (tentativa == numero) {
        console.log(`Parabéns, você acertou, era o ${numero} que estava pensando.`);
        break;
    }
}
```

Essa estrutura usa:

* `if / else if` para comparação das tentativas;
* `console.clear()` para limpar o terminal e melhorar a experiência visual;
* `break` para sair do loop ao acertar o número.

---

### Dificuldades e aprendizados

Durante o desenvolvimento do jogo, surgiram várias dúvidas e descobertas importantes:

* ❌ No início, o `console.log` com a mensagem de sucesso estava fora do `while`, o que causava um loop infinito;
* 🤯 Havia confusão sobre como criar e chamar funções atribuídas a constantes;
* ✅ Aprendi que `prompt-sync` é essencial para inputs no Node.js;
* ✅ Compreendi a diferença entre valores flutuantes e inteiros ao usar `Math.random()` + `Math.round()`;
* ✅ Aprendi a usar `console.clear()` para deixar a interface mais limpa;
* ✅ Fui introduzido ao conceito de “sleep” com Promises, como analogia ao `sleep()` do Python.

---

### Pontos positivos ✨

* Consegui estruturar as tarefas do jogo em etapas lógicas;
* Lembrei e utilizei bem o `while` e os operadores de comparação;
* Com a ajuda dos colegas, corrigi erros e melhorei a estrutura geral;
* Tive contato com recursos novos como `prompt-sync`, `console.clear` e funções anônimas atribuídas a variáveis.

---

### Pontos a melhorar ⚠️

* Preciso reforçar o uso de bibliotecas externas e como inicializar corretamente um projeto com `npm init`;
* Ainda tenho dificuldade em organizar o raciocínio completo de um código antes de começar a escrever;
* Demorei mais do que esperava para concluir o desafio, o que gerou insegurança;
* Preciso praticar mais a criação e chamada de funções.

---

### Reflexão final

> *“Foi um momento que me mostrou que ainda tenho muito a estudar. Me senti travado, demorei para resolver coisas simples, e isso me abalou um pouco. Mas participar da live me tirou da zona de conforto e me apresentou a novas formas de estudar, além de contar com a ajuda de colegas. Isso me fortaleceu e me motivou a continuar.”*

Essa experiência, além de prática, foi **emocionalmente marcante**, pois revelou tanto pontos fracos quanto forças inesperadas: a coragem de persistir, a humildade para pedir ajuda, e o desejo genuíno de melhorar.

---

### Temas para aprofundar após a live 📚

* Easy return
* Sleep (função que simula o `sleep()` do Python)
* Arrow functions
* Promises
* PromptSync ✅
* Funções assíncronas
* While loop ✅
* Reduce (array)


### Estudar:
* Easy return
* Sleep (Função que emula o sleep do python)
* arrows functions
* promises
* PromptSync
* Funções Assincronas 
* While loop
* reduce (array)
* JS procedural x funcional


