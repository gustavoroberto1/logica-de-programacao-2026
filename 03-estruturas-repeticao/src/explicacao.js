import leia from 'readline-sync';

// var qtd = 0;
// while (qtd <= 100) {
//     console.log("NÃO CONSIGO DORMIR CEDO - " + qtd);
//     qtd++;
// }

// var senha = "";
// var tentativas = 3;

// // ENQUANTO
// while (senha !== "1234" && tentativas > 0) {
//     senha = leia.question("DIGITE A SENHA: VOCE TEM " + tentativas + " tentativas");

//     if (senha !== "1234") {
//         console.log("SENHA ESTÁ INCORRETA!!!!")
//         tentativas--;
//     }
// }

// if (tentativas > 0) {
//     console.log("SENHA CORRETA!!!!")
// } else {
//     console.log("VOCÊ NÃO TEM MAIS TENTATIVAS")
// }

var somaNotas = 0;
var quantidade = 6;
var contador = 1;

// while (contador <= quantidade) {
//     var nota = leia.questionFloat("DIGITE A NOTA " + contador + ": ");
//     somaNotas = somaNotas + nota;
//     contador++;
// }

// var media = somaNotas / quantidade;
// console.log("MÉDIA: " + media.toFixed(2));

somaNotas = 0;
for (var cont = 1; cont <= quantidade; cont++) {
    var nota = leia.questionFloat("DIGITE A NOTA " + cont + ": ");
    somaNotas = somaNotas + nota;
}

var media = somaNotas / quantidade;
console.log("MÉDIA: " + media.toFixed(2));