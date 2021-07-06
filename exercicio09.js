/// imprime a tabuada do numero digitado

var readlineSync = require('readline-sync');
 var a = 0;

 a = parseFloat(readlineSync.question("Digite o primeiro numero: "));

    for(i = 1; i < 11; i++){
        var multiplicao = a * i;
        console.log(a + " x " + i + " = " + multiplicao);

    }