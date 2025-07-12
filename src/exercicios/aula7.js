/* 
🚀 Questão 1 – Criando uma classe básica
Crie uma classe chamada Pessoa que tenha os seguintes atributos:
nome
idade
E um método chamado apresentar() que retorna a string:
"Olá, meu nome é [nome] e tenho [idade] anos."
Instancie um objeto dessa classe e chame o método apresentar().
*/
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const matheus = new Pessoa("Matheus", 26);
matheus.apresentar();




/* 
🧬 Questão 2 – Herança
Crie uma classe chamada Funcionario que herda de Pessoa (da questão anterior) e adicione:
Um atributo adicional: cargo
Um método chamado descricaoCargo() que retorna:
"Trabalho como [cargo]."
Crie uma instância de Funcionario e use os dois métodos: apresentar() e descricaoCargo().
*/
class Funcionario extends Pessoa {
    // Quando estamos criando uma classe que pega atributos herdados e queremos adicionar um novo atributo nós temos passar todos os atributos os que foram herdados usamos o super e o novo mantemos a estrutura do this.

    // Tenho que estudar coesão, reuso, acoplamento, classe, atributo, método, os tipos de atributos e métodos
    constructor(nome, idade, cargo) {
        super(nome, idade)
        this.cargo = cargo;
    }

    descricaoCargo() {
        console.log(`Trabalho como ${this.cargo}`)
    }
}

const funcionarioMatheus = new Funcionario(matheus.nome, matheus.idade, 'professor');
console.log(funcionarioMatheus);

const pessoa = new Pessoa("Eduardo", 29)
const func = new Funcionario(pessoa.nome, pessoa.idade, "dev")



/* 
🔒 Questão 3 – Encapsulamento com propriedades privadas
Crie uma classe chamada ContaBancaria com:
um saldo privado #saldo iniciado com 0;

métodos públicos:
depositar(valor) → adiciona ao saldo;
sacar(valor) → subtrai do saldo, se houver saldo suficiente;
consultarSaldo() → retorna o saldo atual.
Teste os métodos criando uma conta e fazendo depósitos e saques.

*/
class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        this.#saldo += valor;
        console.log(`Você realizou um deposito de R$ ${valor}, seu saldo é de: R$ ${this.#saldo}. `)
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log(`Você realizou um saque de R$ ${valor}, seu saldo é de: R$ ${this.#saldo}. `)
        }

        else {
            console.log('Saldo insuficiente para fazer a operação.')
        }
    }

    consultarSaldo() {
        console.log(`Seu saldo é de R$ ${this.#saldo}`)
    }
}
/* 
🧠 Questão 4 – Classe com métodos estáticos
Crie uma classe Matematica com um método estático dobro(numero) que retorna o dobro do número passado.
Use esse método diretamente pela classe, sem criar um objeto.
*/
// É uma função que é executada sem utilizar os dados do de uma instância, chama como se fosse uma função normal, passando o valor. 
class Matematica {
    static dobro(x) {
        return x * 2;
    }
}

console.log(Matematica.dobro(5))

/* 
🧩 Questão 5 – Polimorfismo com sobrescrita de método
Crie uma classe Animal com um método falar() que retorna "O animal fez um som.".
Depois, crie uma classe Cachorro que herda de Animal e sobrescreve o método falar() para retornar "O cachorro latiu.".
Crie objetos das duas classes e chame o método falar() para verificar o comportamento diferente.
*/

class Animal {
    falar() {
        console.log("O animal fez um som.")
    }
}

// Para fazer a alteração de um metódo não precisa usar o super, só reescrever o método com as novas informações. (Nesse caso)
class Cachorro extends Animal {
    falar() {
        console.log("O cachorro fez um som.")
    }
}

const cachorro = new Cachorro;
const animal = new Animal;

cachorro.falar();
animal.falar();