const infoAlunos = []
console.log(infoAlunos);

class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno = new Aluno("Mateus", 3)
const aluno2 = new Aluno("José", 8)
const aluno3 = new Aluno("Eduardo", 9)
const aluno4 = new Aluno("Zé",2)
const aluno5 = new Aluno("Matheus",7)

infoAlunos.push(aluno, aluno2, aluno3, aluno4, aluno5);
console.log(infoAlunos);

const media = (aluno) => {
    if (aluno.nota >= 6) {
        return aluno
    }
    
}

const alunosMedia = infoAlunos.filter(media)

console.log(alunosMedia);