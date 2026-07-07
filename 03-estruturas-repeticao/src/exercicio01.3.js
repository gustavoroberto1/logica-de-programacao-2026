import leia from 'readline-sync';

var numero = leia.questionInt("DIGITE UM NUMERO: ");
var contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador <= numero);