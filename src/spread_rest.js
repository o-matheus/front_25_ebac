function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

// Função com o rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20));

// Função com o spread
const numeros = [1, 2, 3, 4];
// console.log(...numeros)

const timesCE = ["Fortaleza", "Ceará", "Ferroviario"];
const timesPE = ["Sport", "Bahia", "Nautico", "Santa Cruz"];
const timesNordeste = [...timesCE, ...timesPE];

// console.log(timesNordeste);

const carroMatheus = {
    marca: "Ford",
    modelo: "Ka",
    motor: 1.0
}

const carroLucas = {
    ...carroMatheus,
    motor: 1.5
}

// console.log(carroMatheus);
// console.log(carroLucas);

// desestruturação JS
const {motor: motorMatheus} = carroMatheus;
const {motor: motorLucas} = carroLucas;

// console.log(motorMatheus);
// console.log(motorLucas);

const [i1, i2, i3, i4, ...outrosTimes] = timesNordeste;

console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);
console.log(outrosTimes);