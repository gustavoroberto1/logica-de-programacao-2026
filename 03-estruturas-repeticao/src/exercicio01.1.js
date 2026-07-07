import leia from 'readline-sync';

var numero = leia.questionInt("DIGITE UM NUMERO: ");
var contador = 0;

while(contador <= numero) {
    console.log(contador);
    contador++;
}