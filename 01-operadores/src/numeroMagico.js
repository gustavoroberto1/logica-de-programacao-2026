import leia from 'readline-sync';

var numeroMagico = Math.floor(Math.random() * 1000) + 1;

var tentativa;
var qtdTentativas = 0;

console.log("=======JOGO NUMERO MÁGICO=======")

do {
    tentativa = leia.questionInt("Digite sua tentativa: ");
    qtdTentativas++;

    if(tentativa > numeroMagico) {
        console.log("O número mágico MENOR!!")
    }else if(tentativa < numeroMagico){
        console.log("O número mágico é MAIOR!!")
    } else {
        console.log("Parabéns!! Você acertou o número mágico!!!");
        console.log("E só precisou de " + qtdTentativas + " tentativas!");
    }
}while(tentativa !== numeroMagico);