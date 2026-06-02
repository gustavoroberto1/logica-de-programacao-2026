import leia from 'readline-sync';

// ENTRADA
var distancia = leia.questionFloat("DIGITE A DISTANCIA PERCORRIDA: ");
var litros = leia.questionFloat("DIGITE A QTD DE LITROS GASTOS: ");

// PROCESSAMENTO
var consumo = distancia / litros;

// SAÍDA
console.log("O CONSUMO MÉDIO É DE : " + consumo + "Km/L");
