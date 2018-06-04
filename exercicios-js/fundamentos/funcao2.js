// Armazenando uma função em uma variável
const imprmirSoma = function (a = 0, b = 0) {
    console.log(a + b)
}

imprmirSoma(2, 3)
imprmirSoma(2)
imprmirSoma()
imprmirSoma(2, 3, 1, 2, 3)

// Armazemamdo uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
console.log(soma(2, 3, 1, 4, 6, 5))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 3))
console.log(subtracao(5))
console.log(subtracao())
console.log(subtracao(5, 3, 1, 4, 7, 5))