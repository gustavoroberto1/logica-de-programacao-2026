import leia from 'readline-sync';

var numero = leia.questionInt("INFORME O NUMERO: ");
var contador = 0;

while (contador <= 10) {
    console.log(numero + " X " + contador + " = " + (numero * contador));
    contador++;
}
