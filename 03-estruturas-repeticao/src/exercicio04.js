import leia from 'readline-sync';

var menorValor, maiorValor;

for (var contador = 1; contador <= 5; contador++) {
    var numeroDigitado = leia.questionInt("DIGITE UM NUMERO " + contador + ": ");

    if (contador === 1) {
        menorValor = numeroDigitado;
        maiorValor = numeroDigitado;
    } else if (numeroDigitado > maiorValor) {
        maiorValor = numeroDigitado;
    } else if (numeroDigitado < menorValor) {
        menorValor = numeroDigitado;
    }
}

console.log("MAIOR VALOR: " + maiorValor)
console.log("MENOR VALOR: " + menorValor)
