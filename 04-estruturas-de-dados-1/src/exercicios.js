import leia from 'readline-sync';

export function exercicio01() {
    console.log("----EXERCICIO 01----")
}

export function exercicio05() {
    console.log("----EXERCICIO 05----");

    var numeros = [];
    // PEDE 10 NUMEROS AO USUÁRIO E GUARDA NA LISTA
    for (var i = 0; i < 10; i++) {
        var numero = leia.questionInt("DIGITE UM NUMERO");
        numeros.push(numero);
    }
    console.table(numeros)


    // REVERSÃO DA LISTA
    var vetorInvertido = []
    for (var i = 9; i >= 0; i--) {
        vetorInvertido.push(numeros[i]);
    }
    numeros = vetorInvertido;
    console.table(numeros)
}

export function exercicio08() {
    var v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var v2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    var v3 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    var resultado = [];

    // FORMA 1
    for (var i = 0; i < v1.length; i++) {
        if (i >= 0 && i <= 2) {
            resultado[i] = v1[i]
        } else if (i >= 3 && i <= 5) {
            resultado[i] = v2[i]
        } else {
            resultado[i] = v3[i]
        }
    }

    // console.log(resultado);

    // FORMA 2
    for (var i = 0; i < 3; i++) {
        resultado.push(v1[i]);
    }

    for (var i = 3; i < 6; i++) {
        resultado.push(v2[i]);
    }

    for (var i = 6; i < 9; i++) {
        resultado.push(v3[i]);
    }

    resultado = [
        ...v1.slice(0, 3),
        ...v2.slice(3, 6),
        ...v3.slice(6, 9),
    ]

    console.log(resultado)
}

export function exercicio12() {
    var lados = [0, 0, 0, 0, 0, 0];

    for (var i = 0; i < 1000; i++) {
        var resultadoDado = Math.floor(Math.random() * 6) + 1;
        lados[resultadoDado - 1]++;
    }

    var dadoViciado = false;
    for (var i = 0; i < lados.length; i++) {
        var porc = (lados[i] / 1000) * 100;
        console.log("LADO " + (i + 1) + " - " + lados[i] + " vezes - " + porc.toFixed(2) + "%")
        if (porc > 22) {
            dadoViciado = true;
        }
    }

    if (dadoViciado === true) {
        console.log("ESSE DADO É VICIADO")
    } else {
        console.log("ESSE DADO NÃO É VICIADO")
    }

}