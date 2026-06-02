import leia from 'readline-sync';

// ENTRADA
var nome = leia.question("INFORME O NOME DO FUNCIONARIO: ") 
var salario = leia.questionFloat("DIGITE O SALARIO: R$");

// PROCESSAMENTO
var novoSalario = salario + (salario * (15 / 100));

// SAÍDA 
console.log("O NOVO SALARIO DO " + nome + " SERÁ DE R$" + novoSalario);

