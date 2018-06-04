function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
let n = 0

do {
    n++
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(opcao)
} while (opcao != -1)

console.log("Programa finalizado e exceutado por " + n + " vezes.")