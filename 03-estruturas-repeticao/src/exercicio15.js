import leia from 'readline-sync';

var decimal = leia.questionInt("INFORME O NUMERO EM DECIMAL: ");
var binario = "";

while (binario > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
}

console.log("BINÁRIO: " + binario); 