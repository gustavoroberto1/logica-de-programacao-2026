import leia from 'readline-sync';

var opcao = leia.keyInSelect(["R$10", "R$25", "R$50", "Outro valor"], "QUANTO DESEJA DOAR?")

if (opcao === 0) {
    console.log("MUITO OBRIGADO, VOCÊ DOOU R$10,00");
} else if (opcao === 1) {
    console.log("MUITO OBRIGADO, VOCÊ DOOU R$25,00");
} else if (opcao === 2) {
    console.log("MUITO OBRIGADO, VOCÊ DOOU R$50,00");
} else if (opcao === 3) {
    var valor = leia.questionFloat("INFORME O VALOR QUE VOCÊ DESEJA DOAR: R$");
    console.log("MUITO OBRIGADO, VOCÊ DOOU R$" + valor.toFixed(2));
}