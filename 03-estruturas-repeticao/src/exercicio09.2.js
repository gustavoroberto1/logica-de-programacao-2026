import leia from 'readline-sync';

var numero = leia.questionInt("INFORME UM NUMERO: ")
var contador = 0;

while (numero !== 0) {
    numero = leia.questionInt("INFORME UM NUMERO: ");
    if (numero > 100 && numero < 200) {
        contador++;
    }
}

console.log("FORAM DIGITADOS " + contador + " NUMEROS ENTRE 100 E 200!!!");