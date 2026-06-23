import leia from 'readline-sync';

var nota1 = leia.questionFloat("DIGITE A NOTA 01: ");
var nota2 = leia.questionFloat("DIGITE A NOTA 02: ");
var nota3 = leia.questionFloat("DIGITE A NOTA 03: ");
var nota4 = leia.questionFloat("DIGITE A NOTA 04: ");
var nota5 = leia.questionFloat("DIGITE A NOTA 05: ");

var qtdDiasPresentes = leia.questionInt("DIGITE A QTD DE DIAS PRESENTES: ")
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

var freq = (qtdDiasPresentes / 200) * 100;
console.log("FREQUÊNCIA: " + freq.toFixed(1));
console.log("MÉDIA: " + media.toFixed(2));

if (media > 7 && freq > 75) {
    console.log("APROVADO!!")
} else {
    console.log("REPROVADO!!")
}



