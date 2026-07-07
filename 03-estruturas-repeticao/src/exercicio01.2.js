import leia from 'readline-sync';

var numero = leia.questionInt("DIGITE UM NUMERO: ");
for (var contador = 0; contador <= numero; contador++) {
    console.log(contador);
}