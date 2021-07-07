/// FizzBuzz
/// Divisivel por 3 => "Fizz"
/// Divisivel por 5 => "Buzz"
/// Divisivel por 3 e 5 => "FizzBuzz"
/// Se nao for um numero => "Nao e um numero"
/// Se nao for divisivel nem por 3 e nem por 5 => "entrada"

let resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== "number")
        return "nao e um numero";
    if ((entrada % 3 === 0) && (entrada % 5 ===0));
        return "FizzBuzz";
    if ((entrada % 3 ===0));
        return "Fizz";
    if ((entrada % 5 ===0))
        return "Buzz";
    
    return entrada;
}