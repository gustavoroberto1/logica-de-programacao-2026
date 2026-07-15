import leia from 'readline-sync';

var quant = leia.questionInt("INFORME A QUANTIDADE DE NUMEROS DA SEQUENCIA: ");
var primeiro = 1;
var segundo = 1;
var contador = 1;

while (contador <= quant) {
    console.log(primeiro);

    var proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;

    contador++;
}
