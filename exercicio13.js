/// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

var readlineSync = require('readline-sync');
produto = parseFloat(readlineSync.question("Digite o valor do produto: "));

function desconto (novoPreco){ 
    valor = produto * (5/100);
    novoPreco = produto - valor;

    return novoPreco;
}

console.log("A valor com 5% de desconto e de: "+ (desconto()) + " reais.");
console.log("Voce teve um desconto de : "+ valor + " reais.");
