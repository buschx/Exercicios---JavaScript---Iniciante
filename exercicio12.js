
/// A multiplicao entre dois valores utilizando uma function


var readlineSync = require('readline-sync');
a = parseFloat(readlineSync.question("Digite o primeiro numero: "));
b = parseFloat(readlineSync.question("Digite o segundo  numero: "));

function multiplicacao (a, b){
    return a * b; 
}


console.log(multiplicacao(a, b));