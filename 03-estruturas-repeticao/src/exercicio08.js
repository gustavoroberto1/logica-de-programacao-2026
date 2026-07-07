import leia from 'readline-sync';

var somaImpares = 0;
var multPares = 1;

for (var contador = 0; contador < 6; contador++) {
    var numero = leia.questionInt("DIGITE UM NUMERO " + contador + ": ");

    if (numero % 2 === 0) {
        multPares = multPares * numero;
    } else {
        somaImpares = somaImpares + numero;
    }
}

console.log("SOMA IMPARES: " + somaImpares);
console.log("MULTIPLICAÇÃO DOS PARES: " + multPares);