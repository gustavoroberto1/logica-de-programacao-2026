import leia from 'readline-sync';

var placa = leia.question("DIGITE SUA PLACA: ");
var ud = placa[placa.length - 1];

// IF...ELSE
if (ud === '0' || ud === '1') {
    console.log("VOCÊ NÃO PODE RODAR NA SEGUNDA-FEIRA");
} else if (ud === '2' || ud === '3') {
    console.log("VOCÊ NÃO PODE RODAR NA TERÇA-FEIRA")
} else if (ud === '4' || ud === "5") {
    console.log("VOCÊ NÃO PODE RODAR NA QUARTA-FEIRA")
} else if (ud === '6' || ud === '7') {
    console.log("VOCÊ NÃO PODE RODAR NA QUINTA-FEIRA")
} else if (ud === '8' || ud === '9') {
    console.log("VOCÊ NÃO PODE RODAR NA SEXTA-FEIRA")
}


// SWITCH...CASE
switch (ud) {
    case "0":
    case "1":
        console.log("NÃO PODE RODAR NA SEGUNDA-FEIRA");
        break;
    case "2":
    case "3":
        console.log("NÃO PODE RODAR NA TERÇA-FEIRA");
        break;
    case "4":
    case "5":
        console.log("NÃO PODE RODAR NA QUARTA-FEIRA");
        break;
    case "6":
    case "7":
        console.log("NÃO PODE RODAR NA QUINTA-FEIRA");
        break;
    case "8":
    case "9":
        console.log("NÃO PODE RODAR NA SEXTA-FEIRA");
        break;
    default:
        console.log("NÚMERO INVÁLIDO!!!")
}

// OPERADOR TERNÁRIO
var mensagem = ud === '0' || ud === '1' ? `SEGUNDA-FEIRA` :
    ud === '2' || ud === '3' ? `TERÇA-FEIRA` :
        ud === '4' || ud === '5' ? `QUARTA-FEIRA` :
            ud === '6' || ud === '7' ? `QUINTA-FEIRA` :
                ud === '8' || ud === '9' ? `SEXTA-FEIRA` :
                    "NÚMERO INVÁLIDO";

console.log(`NÃO PODE RODAR NA ${mensagem}`);