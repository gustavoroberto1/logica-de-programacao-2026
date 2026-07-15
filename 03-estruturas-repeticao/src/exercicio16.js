import leia from 'readline-sync';

const QTD_ALUNOS = 3;
const QTD_NOTAS = 3;

var nomeMaiorMedia;
var maiorMedia;

for (var i = 0; i < QTD_ALUNOS; i++) {
    var nome = leia.question("INFORME O NOME DO ALUNO: ");

    var somaNotas = 0;
    for (var j = 0; j < QTD_NOTAS; j++) {
        var nota = leia.questionFloat("INFORME A NOTA " + (j + 1) + ": ");
        somaNotas += nota;
    }

    var media = somaNotas / QTD_NOTAS;

    if (i === 0) {
        nomeMaiorMedia = nome;
        maiorMedia = media;
    }

    if (media > maiorMedia) {
        nomeMaiorMedia = nome;
        maiorMedia = media;
    }

    console.log("============")
}

console.log("O ALUNO COM A MAIOR MÉDIA FOI " + nomeMaiorMedia + " COM MÉDIA: " + maiorMedia.toFixed(2))
