/// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

var readlineSync = require('readline-sync');
real = parseFloat(readlineSync.question("Digite o valor em real que deseja converter em dolares: "));
dolar = parseFloat(readlineSync.question("Digite o valor do dolar no dia atual: "))

function valorDolar(real, dolar){ 
    return real * dolar;
}

console.log("O valor em real de R$: "+ real +" em dolar é de: "(valorDolar()));