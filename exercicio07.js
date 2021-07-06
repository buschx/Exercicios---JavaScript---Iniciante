 
 /// Soma de dois valores executados no nodeJs
 
 var readlineSync = require('readline-sync');
 var a = 0;
 var b = 0;
 var soma = 0;

 a = parseFloat(readlineSync.question("Digite o primeiro numero: "));
 b = parseFloat(readlineSync.question("Digite o segundo numero: "));
 soma = a + b;
 console.log("A soma entre os 2 valores e: "+ soma );