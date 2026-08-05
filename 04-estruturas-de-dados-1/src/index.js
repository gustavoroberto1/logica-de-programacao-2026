import leia from 'readline-sync';
import { exercicio01, exercicio05, exercicio08, exercicio12 } from './exercicios.js';

const QTD_OPCOES = 13;
var opcoes = [];
for (var i = 1; i <= QTD_OPCOES; i++) {
    opcoes.push("EXERCICIO " + i.toString().padStart(2, "0"))
}

var opcao = leia.keyInSelect(opcoes, "SELECIONE UMA OPCAO");
switch (opcao) {
    case 0:
        exercicio01();
        break;
    case 4:
        exercicio05();
        break;
    case 7:
        exercicio08();
        break;
    case 11:
        exercicio12();
        break;
}