import leia from 'readline-sync';

var horas = leia.questionInt("DIGITE QUANTAS HORAS FICOU NO ESTACIONAMENTO");
var temFidelidade = leia.keyInSelect(["SIM", "NAO"], "POSSUI CARTAO FIDELIDADE");

var valor = 0;
if (horas === 1) {
    valor = 8.0;
} else if (horas > 1 && horas <= 3) {
    valor = 15.0;
} else if (horas > 3 && horas <= 6) {
    valor = 22.0;
} else {
    valor = 30.0
}

var valorComDesconto = (temFidelidade === 0) ? valor - (valor * 0.15) : valor;
console.log("O VALOR DO ESTACIONAMENTO É: R$" + valorComDesconto);
