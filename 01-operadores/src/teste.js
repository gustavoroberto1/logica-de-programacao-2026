import readline from 'readline-sync';   

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;

const numeroMagico = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

let tentativa;
let quantidadeTentativas = 0;

console.log("=== JOGO DO NÚMERO MÁGICO ===");
console.log(`Tente adivinhar um número entre ${MIN_NUMBER} e ${MAX_NUMBER}.`);

do {
    tentativa = Number(readline.question("Digite sua tentativa: "));
    quantidadeTentativas++;
    if (tentativa === numeroMagico) {
        console.log("Parabéns! Você acertou o número mágico!");
        console.log(`Quantidade de tentativas: ${quantidadeTentativas}`);
    } else if (tentativa > numeroMagico) {
        console.log("O número mágico é MENOR");
    } else {
        console.log("O número mágico é MAIOR");
    }
} while (tentativa !== numeroMagico);