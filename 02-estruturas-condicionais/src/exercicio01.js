import leia from 'readline-sync';

var senhaPadrao = "1234";
var senhaUsuario = leia.question("DIGITE A SUA SENHA: ");

if(senhaUsuario === senhaPadrao){
    console.log("ACESSO PERMITIDO!!!")
}else {
    console.log("ACESSO NEGADO!!!")
}

console.log("BLABLBALBA");

