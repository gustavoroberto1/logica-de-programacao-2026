import leia from 'readline-sync';

// ENTRADA
var nota1 = leia.questionFloat("DIGITE A PRIMEIRA NOTA: ");
var nota2 = leia.questionFloat("DIGITE A SEGUNDA NOTA: ");
var nota3 = leia.questionFloat("DIGITE A TERCEIRA NOTA: ");

// PROCESSAMENTO
var media = (nota1 + nota2 + nota3) / 3;
var resultado = media >= 7 ? "APROVADO" : "REPROVADO";


// SAÍDA
console.log("A MÉDIA DO ALUNO É: " + media.toFixed(2) + " E ELE ESTÁ: " + resultado);