const redesSociais = ["Facebook", "Instagram", "Twitter"];

// Antes do ES6
// for (i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social ${redesSociais[i]}`)
// }

// Depois do ES6
redesSociais.forEach(function (nomeRede, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social ${nomeRede}`)
})

const alunos = ["Luan", "Jotta", "Eve"]

const alunosECursos = alunos.map(function (itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: "Frontend",
    }
    return itemAtual;
    // O return pode ser escrito dessa forma também
    // return {
    //     nome: itemAtual,
    //     curso: "Frontend",
    // }

})

console.log(alunosECursos)

const jotta = alunosECursos.find(function (item) {
    return item.nome == "Jotta";
})

console.log(jotta);

const indiceJotta = alunosECursos.findIndex(function (item) {
    return item.nome == "Jotta"
})

console.log(indiceJotta);

const frontend = alunosECursos.every(function (item) {
    return item.curso === "Frontend"
})

console.log(frontend)

alunosECursos.push({
    nome: "José",
    curso: "DataScience"
})

function filtraAlunosData(aluno) {
    return aluno.curso === "DataScience";
}
const alunosData = alunosECursos.filter(filtraAlunosData)

console.log(alunosData);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador;
}, 0)

console.log(soma);
