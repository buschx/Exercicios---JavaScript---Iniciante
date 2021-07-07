const alunosGama = ["Gustavo", "Paulo", "Roberto", "Clara"]


// Acessar informacoes em um array
console.log(alunosGama[2]) //Roberto

// Operador spread (...)
const alunosXp = [...alunosGama, "Joao"]

console.log(alunosXp);

// Metodos de interacao

for (let i = 0; i < alunosXp.length; i++){
    console.log(alunosXp[i])
}

// Map

alunosXp.map(aluno => console.log(aluno))

// Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 ==0)
console.log(numerosPares)

// Sort

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)

// reduce - reduz nosso array a um resultado de uma operacao matematica

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual
},5)

console.log(soma) //75