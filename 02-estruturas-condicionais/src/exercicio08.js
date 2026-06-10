import leia from 'readline-sync';

var meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

var dias = [
    '31', '28/29', '31', '30', '31', '30',
    '31', '31', '30', '31', '30', '31'
];

var select = leia.keyInSelect(meses, "INFORME O MÊS");
console.log("O MÊS SELECIONADO FOI " + meses[select] + " E TEM " + dias[select] + " DIAS");