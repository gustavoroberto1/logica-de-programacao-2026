import leia from 'readline-sync';

var numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");

while (numeroDigitado >= 0) {
    console.log(numeroDigitado);
    numeroDigitado--;
}