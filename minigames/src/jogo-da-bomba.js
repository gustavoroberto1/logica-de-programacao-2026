import leia from 'readline-sync';

console.log("===== DESARME A BOMBA =====");
console.log("UMA BOMBA FOI ENCONTRADA, VOCÊ PRECISA CORTAR O FIO CERTO!");
console.log("SE CORTAR O FIO ERRADO KABUMMM! E VOCÊ TEM 3 TENTATIVAS!");
console.log("================");

var fios = [
    "Vermelho", "Azul", "Verde", "Amarelo", "Preto",
    "Branco", "Laranja", "Roxo", "Marrom", "Cinza"
];

var fioCorreto = fios[Math.floor(Math.random() * fios.length)];
var tentativas = 3;
var desarmou = false;

do {
    var escolha = leia.keyInSelect(
        fios,
        `Escolha um fio para cortar, voce tem ${tentativas} tentativas`
    )
    var fioEscolhido = fios[escolha];

    if (fioEscolhido === fioCorreto) {
        console.log("VOCÊ CORTOU O FIO CORRETO!");
        console.log("BOMB HAS BEEN DEFUSED");
        desarmou = true;
    } else {
        console.log("VOCÊ CORTOU O FIO " + fioEscolhido);
        console.log("ESSE NÃO ERA O FIO CORRETO!");

        tentativas--;
        fios.splice(escolha, 1);
    }

    console.log('-------------------------')
} while (tentativas > 0 && desarmou === false);

if (desarmou === false) {
    console.log("KABUMMMMMMMMMMMMMMMMMMM! não o site!")
    console.log("O FIO CORRETO ERA O " + fioCorreto);
}
