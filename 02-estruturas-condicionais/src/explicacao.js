
// E - SÓ VAI DAR VERDEIRO SE TODOS FOREM VERDADEIROS
// OU - SÓ VAI DAR FALSO SE TODOS FOREM FALSOS


// FAIXA ETÁRIA
var idade = 30;
var temCnh = true;

if(idade < 1) {
    console.log("RECÉM NASCIDO")
} else if(idade >= 1 && idade <= 12) {
    console.log("CRIANÇA")
} else if(idade > 12 && idade < 18) {
    console.log("ADOLESCENTE")
} else if(idade >= 18 && idade <= 60) {
    console.log("ADULTO")
} else {
    console.log("IDOSO")
}

// SITUAÇÃO ALUNO
var mediaFinal = 4;

if(mediaFinal >= 7) {
    console.log("APROVADO!!")
} else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log("EM RECUPERAÇÃO!!")
} else {
    console.log("REPROVADO!!")
}

// DIA DA SEMANA
var diaSemana = "quarta";
if(diaSemana === "sabado" || diaSemana === "domingo") {
    console.log("FIM DE SEMANA");
} else {
    console.log("DIA ÚTIL")
}


// FORMAS DE PAGAMENTO
var fp = "débito";
var valorProduto = 15.6;

if(fp === "pix" || fp === 'dinheiro' || fp === "débito"){
    if(fp === "débito") {
        var valorFinal = valorProduto + (valorProduto * 0.05)
        console.log("VALOR DO PRODUTO É: R$" + valorFinal.toFixed(2))
    }else {
        console.log("VALOR DO PRODUTO É: R$" + valorProduto.toFixed(2))
    }
} else {
    var valorFinal = valorProduto + (valorProduto * 0.15)
    console.log("VALOR DO PRODUTO É: R$" + valorFinal.toFixed(2))
}


// DESAFIO DO NÚMERO PAR OU IMPAR;
var numero = 6;
if(numero % 2 === 0) {
    console.log("PAR")
}else {
    console.log("IMPAR")
}

// SWITCH CASE
var cor = "VERDE";
switch (cor) {
    case "VERMELHO":
        console.log("PARE")
        break;
    case "AMARELO":
        console.log("ATENÇÃO")
        break;
    case "VERDE":
        console.log("SIGA")
        break;
    default:
        console.log("COR INVÁLIDA")
}

// SWITCH CASE
var idioma = 'es';
switch(idioma){
    case 'fr':
        console.log("BONJOUR!!")
        break;
    case 'pt':
        console.log("Olá")
        break;
    case 'es': 
        console.log("!Hola")
        break;
    default:
        console.log("Hello")
}


// OPERADOR TERNÁRIO / ESTRUTURA CONDICIONAL

var idade = 22;
var eMaior = idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE";
console.log(eMaior);

// OU
console.log(idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE")