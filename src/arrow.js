const minhaFuncao = () => "Arou"

console.log(minhaFuncao());

const retornaUmCarro = () => ({
    modelo: "ka",
    marca: "ford"
})

console.log(retornaUmCarro());


const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10
    },
    freiar: () => {
        this.velocidadeAtual -= 10
    }
}

carro.acelerar();
carro.freiar();

console.log(carro.velocidadeAtual);
