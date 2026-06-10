import leia from 'readline-sync';

var quantidade = leia.questionInt("INFORMA QUANTAS MACAS QUER COMPRAR: ");
var valor = quantidade < 12 ? quantidade * 0.30 : quantidade * 0.25;

console.log("VOCÊ VAI PAGAR EM " + quantidade + ": R$" + valor.toFixed(2))
