import leia from 'readline-sync';

var numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");

for (var contador = numeroDigitado; contador >= 0; contador--) {
    console.log(contador);
}