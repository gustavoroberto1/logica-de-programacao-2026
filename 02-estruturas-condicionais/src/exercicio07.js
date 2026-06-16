import leia from 'readline-sync';

var salario = leia.questionFloat("INFORME O SALARIO DO FUNCIONARIO: R$");
var emprestimo = leia.questionFloat("INFORME O VALOR DO EMPRESTIMO: R$");
var parcelas = leia.questionInt("INFORME A QUANTIDADE DE PARCELAS: ");

var valorParcela = emprestimo / parcelas;
var trintaPorCentoSalario = salario * (30 / 100);

if(valorParcela > trintaPorCentoSalario){
    console.log("VOCÊ NÃO PODE FAZER O EMPRESTIMO!")
}else {
    console.log("VOCÊ VAI PODER FAZER O EMPRESTIMO!")
}
