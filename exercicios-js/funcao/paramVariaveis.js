function soma() {
    let soma = 0

    for(let i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(5,5,5,5,5))