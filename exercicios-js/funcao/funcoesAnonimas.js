const soma = function (x, y) {
    return x + y
}

const imprimirRsultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirRsultado(2, 4)
imprimirRsultado(3, 5, soma)
imprimirRsultado(2, 5, function (x, y) {
    return x * y
})
imprimirRsultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Olá')
    },
    gritar() {
        console.log('Ahhhhh')
    }
}
pessoa.falar()
pessoa.gritar()