import leia from 'readline-sync';

var numero;
var contador = 0;

do {
    numero = leia.questionInt("INFORME UM NUMERO: ");
    if (numero > 100 && numero < 200) {
        contador++;
    }
} while (numero !== 0);

console.log("FORAM DIGITADOS " + contador + " NUMEROS ENTRE 100 E 200!!!");