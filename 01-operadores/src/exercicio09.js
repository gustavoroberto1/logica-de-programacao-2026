import leia from 'readline-sync';

// ENTRADA
var metros = leia.questionFloat("DIGITE UM NUMERO EM METROS: ");

// PROCESSOS
var centimetros = metros * 100;
var milimetros = metros * 1000;

// SAÍDA
console.log("---Resultado----")
console.log(metros.toFixed(2) + " M")
console.log(centimetros.toFixed(2) + " CM")
console.log(milimetros.toFixed(2) + " MM")
