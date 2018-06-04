const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua',
        numero: 44
    }
}

const { nome, idade } = pessoa
console.log(nome)
console.log(idade)

const { nome: n, idade: i } = pessoa
console.log(n)
console.log(i)