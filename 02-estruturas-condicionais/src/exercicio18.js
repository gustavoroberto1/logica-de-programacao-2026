import leia from 'readline-sync';

var numeroUm = leia.questionFloat("DIGITE O PRIMEIRO NUMERO: ")
var numeroDois = leia.questionFloat("DIGITE O SEGUNDO NUMERO: ")
var operacao = leia.keyInSelect(["+", "-", "X", "/", "%"], "SELECIONE A OPERACAO:");

switch(operacao){
    case 0:
        var result = numeroUm + numeroDois;
        console.log(result);
        break;
    case 1:
        var result = numeroUm - numeroDois;
        console.log(result);
        break;
    case 2:
        var result = numeroUm * numeroDois;
        console.log(result);
        break;
    case 3:
        if(numeroDois === 0){
            console.log("NÃO É POSSÍVEL DIVIDIR POR ZERO");
            break;
        }
        var result = numeroUm / numeroDois;
        console.log(result);
        break;
    case 4:
        if(numeroDois === 0){
            console.log("NÃO É POSSÍVEL DIVIDIR POR ZERO");
            break;
        }
        var result = numeroUm % numeroDois;
        console.log(result);
        break;
}

