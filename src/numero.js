import PromptSync from "prompt-sync";
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
console.log("Você consegue advinhar o número que estou pensando? É um número de 0 a 100");
const input = PromptSync({ sigint: true });
const numero = Math.round(Math.random() * 100);

while (true) {
    let tentativa = input("Digite um número. ")
    if (tentativa > numero) {
        console.clear();
        console.log("Tente novamente! O número que você escreveu é maior que o número que estou pensando");
        await sleep(1000);
        continue 
    }
    else if (tentativa < numero) {
        console.clear()
        console.log("Tente novamente! O número que você escreveu é menor que o número que estou pensando.")
        await sleep(1000)
    }
    else if (tentativa == numero) {
        console.log(`Parabéns, você acertou, era o ${numero} que estava pensando.`);
        break
    }
}





/*
Adivinhar número. 
O pc vai gerar um número aleatório (1 - 100)
Toda vida que eu digitar o número vai passar por uma condicional. 
Se o número que eu colocar no input for maior vai aparecer esse retorno, a mesma coisa com o menore se eu acertar vai aparecer uma mensagem de sucesso. 
*/