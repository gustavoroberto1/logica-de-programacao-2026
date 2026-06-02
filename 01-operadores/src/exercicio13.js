import leia from 'readline-sync';

// ENTRADA
var valorProduto = leia.questionFloat("DIGITE O VALOR DO PRODUTO: R$");

// PROCESSAMENTO
var valorProdutoComDesconto = valorProduto - (valorProduto * (10 / 100));

// SAÍDA
console.log("O VALOR DO PRODUTO É: R$" + valorProdutoComDesconto.toFixed(2))