const filmes = [
    {
        id: 1,       
        titulo: "Vingadores",
        descricao: "Filme Super Heroi",
        duracao: "240"

    },

    {
        id: 2,       
        titulo: "Homen-Ferro",
        descricao: "Filme Super Heroi 2",
        duracao: "200"

    },

    {
        id: 3,       
        titulo: "Hulk",
        descricao: "Filme Super Heroi 3",
        duracao: "160"

    },
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))



/*const pessoa = {
    nome: "Gustavo",
    idade: 28,
    cidade: "Sao Paulo"
}

// Notacao de ponto

console.log(pessoa.nome) // "Gustavo"

//Notacao de colchetes

console.log(pessoa["idade"]) //28

// Como destruturar Objetos

const {nome, idade, cidade} = pessoa

console.log(nome) // Gustavo
console.log(idade) // 28
console.log(cidade) // Sao Paulo

*/