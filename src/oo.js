
// Criação de classe depois do ES6
class Pokemon  {
    // Encapsulamento do atributo
    #hp = 100;
    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeAtaque)  {
        console.log(`${this.nome} atacou com o ${nomeAtaque}!`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

const pikachu = new Pokemon()
// console.log(pikachu)
// pikachu.atacar('choque do trovão')

// Crianção de classes herdadas. Quando criamos dessa forma os objetos a partir da classe pikachu vão ser instâncias tanto de pikachu tanto de pokemon. (por exemplo)
class Pikachu extends Pokemon {
    constructor() {
        // Forma de trabalhar com o construtor da classe que nos herdamos
        super('pikachu', 'eletrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com o choque do trovão!`)
    }
}

const pikachuMatheus = new Pikachu();
console.log(pikachuMatheus);
pikachuMatheus.exibeHp();
pikachuMatheus.recebeuAtaque();
pikachuMatheus.exibeHp();
console.log(pikachuMatheus);

