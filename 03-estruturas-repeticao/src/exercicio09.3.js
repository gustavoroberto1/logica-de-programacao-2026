import leia from 'readline-sync';

var numero = leia.questionInt("INFORME UM NUMERO: ")
var contador = 0;

for (var i = 1; numero !== 0; i++) {
    numero = leia.questionInt("INFORME UM NUMERO " + i + ": ");
    if (numero > 100 && numero < 200) {
        contador++;
    }
}

console.log("FORAM DIGITADOS " + contador + " NUMEROS ENTRE 100 E 200!!!");