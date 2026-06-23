import leia from 'readline-sync';

var ladoA = leia.questionFloat("DIGITE O LADO A : ");
var ladoB = leia.questionFloat("DIGITE O LADO B: ");
var ladoC = leia.questionFloat("DIGITE O LADO C: ");

var formaTriangulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;

if (formaTriangulo === false) {
    console.log("NÃO É POSSÍVEL FORMAR UM TRIANGULO!!!")
} else if (ladoA === ladoB && ladoB === ladoC) {
    console.log("É UM TRINGULO EQUILATERO!!!");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("É UM TRIANGULO ISOSCELES!!!")
} else {
    console.log("É UM TRIANGULO ESCALENO!!!")
}