import leia from 'readline-sync';

var numero = leia.questionInt("INFORME O NUMERO PARA O FATORIAL: ");
var resultadorFatorial = 1;
var contador = numero;

while (contador >= 1) {
    resultadorFatorial = resultadorFatorial * contador;
    contador--;
}

console.log("O FATORIAL DE " + numero + " É " + resultadorFatorial);