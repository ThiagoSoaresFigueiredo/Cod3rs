// Função SEM retorno
function imprimirSoma(a, b) {
    console.log( (a + b) )
}
imprimirSoma(5, 3)
imprimirSoma(5)
imprimirSoma(5, 3, 3, 6, 4, 9)
imprimirSoma()

// Função COM retorno
function somar(a, b=0) {
    return a + b
}
console.log(somar(2, 3))
console.log(somar(2))
console.log(somar())
console.log(somar(2, 3, 3, 8, 6))