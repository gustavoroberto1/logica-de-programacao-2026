import leia from 'readline-sync';

var modo = leia.keyInSelect(["PvE", "PvP"], "ESCOLHA O MODO DE JOGO");
var numeroMagico;

if (modo === 1) {
    numeroMagico = leia.questionInt("INFORME O NÚMERO MÁGICO: ");
    console.clear();
} else {
    var dificuldade = leia.keyInSelect(["FACIL", "MEDIA", "DIFICIL"], "SELECIONE DIFICULDADE:");
    var limite = dificuldade === 0 ? 1000 : dificuldade === 1 ? 100000 : 1000000;
    numeroMagico = Math.floor(Math.random() * limite);
    console.log("O NÚMERO ESTÁ ENTRE 1 e " + limite);
}

var chute;
var tentivas = 0;

do {
    chute = leia.questionInt("CHUTE O NUMERO MAGICO: ");
    if (chute > numeroMagico) {
        console.log("NÚMERO MÁGICO É MENOR");
    } else if (chute < numeroMagico) {
        console.log("NÚMERO MÁGICO É MAIOR");
    }
    tentivas++;
} while (chute !== numeroMagico);

console.log("VOCÊ ACERTOU!!!");
console.log("VOCÊ LEVOU " + tentivas + " TENTATIVAS!!!")

