import leia from 'readline-sync';

// ENTRADA
var horas = leia.questionInt("DIGITE O NUMERO DE HORAS: ");

// PROCESSAMENTO
var minutos = horas * 60;
var segundos = horas * 3600;

// SAÍDA
console.log("---RESULTADO ---")
console.log("Horas: " + horas)
console.log("Minutos: " + minutos)
console.log("Segundos: " + segundos)