import leia from 'readline-sync';

var nomeProduto = leia.question("DIGITE O NOME DO PRODUTO: ");
var valorProd = leia.questionFloat("DIGITE O VALOR DO " + nomeProduto + ": ");

var total = 0;
total += leia.questionInt("INFORME QTD DE MOEDAS R$1,00: ");
total += leia.questionInt("INFORME QTD DE MOEDAS R$0,50: ") * 0.50;
total += leia.questionInt("INFORME QTD DE MOEDAS R$0,25: ") * 0.25;
total += leia.questionInt("INFORME QTD DE MOEDAS R$0,10: ") * 0.10;
total += leia.questionInt("INFORME QTD DE MOEDAS R$0,05: ") * 0.05;

console.log("VALOR TOTAL DO PORQUINHO É: R$" + total.toFixed(2));

if (total >= valorProd) {
    console.log("VOCÊ PODE COMPRAR O " + nomeProduto + " COM O VALOR DO COFRINHO");
} else {
    console.log("VOCÊ NÃO TEM DINHEIRO SUFICIENTE PARA COMPRAR O " + nomeProduto);
}