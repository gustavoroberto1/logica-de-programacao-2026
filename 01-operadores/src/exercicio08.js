import leia from 'readline-sync';

// ENTRADA
var numero = leia.questionInt(`DIGITE UM NUMERO: `);

// PROCESSAMENTO
var dobro = numero * 2;
var triplo = numero * 3;

// SAÍDA
console.log("O NÚMERO É: " + numero);
console.log("O DOBRO DO NÚMERO É: " + dobro)
console.log("O TRIPLO DO NÚMERO É: " + triplo)