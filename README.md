# Módulo 25 - ES6

## Menu
[Aula 1 - Conheça Babel](#aula-1--conheça-babel)  
[Aula 2 - ](#aula-)  
[Aula 3 - ](#aula-)  
[Aula 4 - ](#aula-)  
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
