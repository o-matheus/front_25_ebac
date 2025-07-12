
// Forma de executar funções em paralelo no JavaScript 
// Resolve - Executado com sucesso / Reject - Erro na execução
const funcaoPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++
        }
        resolve(execucoes);
    } catch (e) {
        reject('Erro na iteração')
    }
})
// Escrevendo uma função de uma forma para ficar com uma execução assincrona, esperar a função que está precedida pelo await para prosseguir com o código. 
async function execucaoPrincipal() {
    console.log("Inicio")

    // Para chamar a função com o promise temos que usar o .then depois de chamar a função e no parametro do then colocar o que vai ser executado. Para estilizarmos a mensagem de erro chamar o catch depois do then. Seguindo mais ou menos a mesma estrutura do try - catch da promise.  
    await funcaoPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

    console.log("Fim")
}

//outra forma de usar o await 
async function execucaoPrincipal() {
    console.log("Inicio")

    try {
        const resultado = await funcaoPromise;
        console.log(resultado)
    } catch (e) {
        console.log(e);
    }

    console.log("Fim")
}
execucaoPrincipal();

// Usando funções com parametros 
const funcaoComParametros = (login, senha) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000);
    })
}

funcaoComParametros('matheus@email.com', 123).then(resultado => {
    console.log(resultado)
})  






