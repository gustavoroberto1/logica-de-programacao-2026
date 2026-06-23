import leia from 'readline-sync';

var valor = leia.questionFloat("DIGITE O VALOR DA COMPRA: R$");
var ehVip = leia.keyInSelect(["SIM", "NÃO"], "DIGITE SE É CLIENTE VIP: ");

var desconto = (valor > 1000 && ehVip === 0) ? 0.20 : (valor > 500 && ehVip === 0) ? 0.10 : 0.05;
var valorComDesconto = valor - (valor * desconto);
console.log("O VALOR FINAL COM DESCONTO É: R$" + valorComDesconto);