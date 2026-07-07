import leia from 'readline-sync';

var numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");
var contador = numeroDigitado;

while (contador >= 0) {
    console.log(contador);
    contador--;
}