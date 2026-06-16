import leia from 'readline-sync';

var nca = leia.question("DIGITE O NOME DO PRIMEIRO CLIENTE: ");
var vca = leia.questionFloat("DIGITE O VALOR GASTO PELO " + nca + ": ");

var ncb = leia.question("DIGITE O NOME DO SEGUNDO CLIENTE: ");
var vcb = leia.questionFloat("DIGITE O VALOR GASTO PELO " + ncb + ": ");

var totalGasto = vca + vcb;
console.log("O VALOR TOTAL GASTO FOI: R$" + totalGasto.toFixed(2));

var mediaGasta = totalGasto / 2;
console.log("O VALOR MÉDIO GASTO FOI: R$" + mediaGasta.toFixed(2));

console.log("LISTA DE CLIENTE QUE GASTARAM ACIMA DE R$20,00")
if (vca > 20) {
    console.log(nca)
}

if (vcb > 20) {
    console.log(ncb)
}