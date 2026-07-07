import leia from 'readline-sync';

var numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");
var contador = numeroDigitado;

do {
    console.log(contador);
    if (numeroDigitado < 0) {
        contador++;
    } else {
        contador--;
    }

} while ((numeroDigitado > 0 && contador >= 0) || (numeroDigitado < 0 && contador <= 0))