function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let n = 0

while(opcao != -1) {
    n++
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(opcao)
}

console.log("Programa finalizado e exceutado por " + n + " vezes.")