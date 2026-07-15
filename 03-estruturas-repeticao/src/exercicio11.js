import leia from 'readline-sync';

const QTD_PESSOAS = 5;
var contador = 1;
var menorAltura;
var maiorAltura;
var quantidadeHomens = 0;
var quantidadeMulheres = 0;
var somaAlturas = 0;
var somaAlturaMulheres = 0;

while (contador <= QTD_PESSOAS) {
    console.log("==== PESSOA " + contador + " ====")
    var altura = leia.questionFloat("DIGITE SUA ALTURA: ");
    var genero = leia.keyInSelect(["MASCULINO", "FEMININO"], "SELECIONE O GENERO: ");

    if (contador === 1) {
        maiorAltura = altura;
        menorAltura = altura;
    }

    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (genero === 0) {
        quantidadeHomens++;
    } else {
        quantidadeMulheres++;
        somaAlturaMulheres += altura;
    }

    somaAlturas += altura;
    contador++;
}

console.log("====== RESULTADOS ======");
console.log("MAIOR ALTURA: " + maiorAltura);
console.log("MENOR ALTURA: " + menorAltura);
console.log("MÉDIA ALTURA MULHERES: " + (somaAlturaMulheres / quantidadeMulheres).toFixed(2));
console.log("MÉDIA ALTURA POPULAÇÃO: " + (somaAlturas / QTD_PESSOAS).toFixed(2));
console.log("PERCENTUAL HOMENS: " + ((quantidadeHomens / QTD_PESSOAS) * 100).toFixed(2) + "%")

