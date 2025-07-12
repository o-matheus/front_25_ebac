/*
🧪 Exercício 1 – Criando uma Promise simples
Crie uma função chamada carregarDados() que retorna uma Promise.
Ela deve simular um carregamento de dados com setTimeout e, após 2 segundos, retornar a string "Dados carregados com sucesso!".
*/

const carregarDados = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dados carregados com sucesso")
    }, 2000)
})

// carregarDados.then((resultado) => {
//     console.log(resultado)
// })

/*
🧪 Exercício 2 – Tratando erro em Promises
Crie uma função buscarUsuario(id) que:
Retorna uma Promise;
Se o id for maior que 0, resolve com o nome "Usuário válido";
Caso contrário, rejeita com a mensagem "ID inválido".
Use o .then() e .catch() para testar a função com um valor válido e outro inválido.
*/

const buscarUsuario = (id) => {
    return new Promise((resolve, reject) => {
        if (id > 0) {
            resolve(` ${id} válida`)
        }
        else {
            reject(` ${id} inválida`)
        }
    })
}

const ids = [0, 2, 3, 5, 6, -3, -2, -1]
buscarUsuario(2).then((resultado) => console.log(resultado)).catch((erro) => console.log(erro))


for (let id of ids) {
    buscarUsuario(id).then((resultado) => console.log(resultado)).catch((erro) => console.log(erro))
}





/*
🧪 Exercício 3 – Usando async/await
Utilize async/await para reescrever a chamada à função carregarDados() do Exercício 1.
Inclua o try/catch para tratar erros, mesmo que a função original não os gere.
*/

const carregarDados2 = () => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Dados carregados com sucesso")
    }, 2000)
})
// Função async na assinatura
async function exercicio3() {
    try {
        const resultado = await carregarDados2();
        console.log(resultado)
    } catch (error) {
        console.error(error)
    }
}

// exercicio3();

/*
🧪 Exercício 4 – Encadeando Promises
Crie uma sequência de Promises que simule o processo de:
Fazer login (login()),
Buscar dados do usuário (buscarDadosUsuario()),
Exibir mensagem de boas-vindas com o nome do usuário (mostrarBoasVindas()).
Cada função deve retornar uma Promise resolvida com um valor fictício (por exemplo, o nome do usuário).
*/





const login = (login) => new Promise((resolve, reject) => {
    resolve(`Fazendo login na conta ${login}`)
    })

const buscarDados = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('carregando dados...')
    }, 1500)
})

const mostrarBoasVindas = (login) => new Promise((resolve, reject) => {
    resolve(`Bem vindo ${login}`)
})

async function processoLogin() {
    try {
        const acesso = await login("Matheus");
        const carregamento = await buscarDados();
        const boasVindas = await mostrarBoasVindas("Matheus")
        console.log(acesso)
        console.log(carregamento)
        console.log(boasVindas)
    } catch (error) {
        console.log(error);
    }
}

// processoLogin();


/*
Exercício 5 – Simulando requisição com fetch (mock)
Crie uma função buscarPosts() com async/await que simula uma chamada fetch para buscar dados de posts.
Use setTimeout para simular o tempo de resposta da rede (ex: 1.5 segundos).
Depois, exiba os posts em um console.log.
*/
async function buscarPosts() {
    const url = "https://swapi.py4e.com/api/people/3";
    const resposta = await fetch(url);
    const json = await resposta.json();
    console.log(json.name)
}

buscarPosts();
/*
Exercicio bonus
Fazer funções com promises que vão simular o processo de login - carregamento - mensagem de boas vindas.
Criar uma função construtora users com as seguintes informações:
- id
- senha
- email

Crie um array que vai armazenar algumas instâncias desse objeto.

Fazer um sistema de validação se o id e senha foram escritos corretamente

-opicional-
Utilize o readline para fazer o input no console.log

*/


// Estrutura (inicio) - promiseChain
const login2 = (login) => new Promise((resolve, reject) => {
    resolve(`Fazendo login na conta ${login}`)
}).then((resutlado) => {

})