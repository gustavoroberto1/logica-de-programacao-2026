import leia from 'readline-sync';

var idade = leia.questionInt("DIGITE SUA IDADE: ");
var salario = leia.questionFloat("DIGITE SEU SALARIO: R$");
var nomeLimpo = leia.keyInSelect(["SIM", "NAO"], "VOCE TEM NOME LIMPO: ");

var requisitosAtendidos = 0;
if (idade >= 18) {
    requisitosAtendidos++;
}

if (salario >= 2500) {
    requisitosAtendidos++;
}

if (nomeLimpo === 0) {
    requisitosAtendidos++;
}

var result = requisitosAtendidos === 3 ? "Aprovado" : requisitosAtendidos === 2 ? "em Analise" : "Reprovado";
console.log("EMPRESTIMO " + result)